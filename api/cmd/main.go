package main

import (
	"os"
	"time"

	"animalfind/auth"
	"animalfind/internal"
	"animalfind/middleware"
	"animalfind/pkg"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		panic("error loading .env")
	}

	// ENV HERE
	url := os.Getenv("SERVER_URL")
	fronturl := os.Getenv("FRONT_URL")
	internal.JwtKey = []byte(os.Getenv("JWT_SECRET"))
	internal.SetConfig(fronturl)
	internal.SetConfig(url)

	internal.InitDB()

	r := gin.Default()

	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5500", "http://localhost:5173"},
		AllowMethods:     []string{"POST", "GET", "OPTIONS", "PUT", "DELETE"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	r.GET("/animal/:identity", internal.GetAnimal)
	r.POST("/addanimal", internal.AddAnimal)
	r.POST("/editanimal/:identity", internal.UpdateAnimal)
	r.GET("/a/:token", internal.ActivateAnimal)

	userRoutes := r.Group("/user")
	userRoutes.Use(middleware.AuthMiddleware())
	{
		userRoutes.POST("/change-password", auth.ChangePassword)
	}

	authRoutes := r.Group("/")
	authRoutes.Use(middleware.AuthRateLimit())
	{
		authRoutes.POST("/login", auth.LoginUser)
		authRoutes.POST("/register", auth.RegisterUser)
	}

	adminRoutes := r.Group("/uokik")
	adminRoutes.Use(middleware.AuthMiddleware())
	adminRoutes.Use(middleware.AdminMiddleware())
	{
		adminRoutes.GET("/uokik/generate", pkg.GenerateToken)
	}

	r.Run(":7070")
}
