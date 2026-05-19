package middleware

import (
	"animalfind/internal"
	"fmt"
	"net/http"
	"time"

	ratelimit "github.com/JGLTechnologies/gin-rate-limit"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
)

func AuthRateLimit() gin.HandlerFunc {
	store := ratelimit.InMemoryStore(&ratelimit.InMemoryOptions{
		Rate:  time.Minute,
		Limit: 6,
	})

	return ratelimit.RateLimiter(store, &ratelimit.Options{
		ErrorHandler: func(ctx *gin.Context, info ratelimit.Info) {
			ctx.JSON(429, gin.H{
				"error": "You are ratelimited, Try again in a few minutes",
			})
		},
		KeyFunc: func(ctx *gin.Context) string {
			return ctx.ClientIP()
		},
	})
}

func AuthMiddleware() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		authHeader := ctx.GetHeader("Authorization")
		if authHeader == "" {
			ctx.JSON(http.StatusUnauthorized, gin.H{"error": "Authorization header required"})
			ctx.Abort()
			return
		}

		token, err := jwt.Parse(authHeader, func(token *jwt.Token) (interface{}, error) {
			if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
				return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
			}
			return internal.JwtKey, nil
		})

		if err != nil || !token.Valid {
			ctx.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid or expired token"})
			ctx.Abort()
			return
		}

		if claims, ok := token.Claims.(jwt.MapClaims); ok {
			ctx.Set("user_email", claims["email"])
			ctx.Set("user_role", claims["role"])
		}

		ctx.Next()
	}
}

func AdminMiddleware() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		role, exists := ctx.Get("user_role")
		if !exists || role != "admin" {
			ctx.JSON(http.StatusForbidden, gin.H{"error": "Only admins can do this!"})
			ctx.Abort()
			return
		}
		ctx.Next()
	}
}
