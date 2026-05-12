package auth

import (
	"animalfind/internal"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	"golang.org/x/crypto/bcrypt"
)



func RegisterUser(ctx *gin.Context) {
	var input internal.RegisterRequest

	if err := ctx.ShouldBindJSON(&input); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Niepoprawne dane"})
		return
	}

	var existingUser internal.User
	if err := internal.DB.Where("email = ?", input.Email).First(&existingUser).Error; err == nil {
		ctx.JSON(http.StatusConflict, gin.H{"error": "Użytkownik o tym mailu już istnieje"})
		return
	}

	hashedPassword, err := hashPassword(input.Password)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Błąd serwera"})
		return
	}

	newUser := internal.User{
		Email:     input.Email,
		Password:  hashedPassword,
		Role:      "user",
		CreatedAt: time.Now(),
	}

	if err := internal.DB.Create(&newUser).Error; err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Nie udało się utworzyć użytkownika"})
		return
	}

	ctx.JSON(http.StatusCreated, gin.H{"status": "Zarejestrowano pomyślnie", "uid": newUser.ID})
}

func LoginUser(ctx *gin.Context) {
	var loginData struct {
		Email    string `json:"email" binding:"required"`
		Password string `json:"password" binding:"required"`
	}

	if err := ctx.ShouldBindJSON(&loginData); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Podaj email i hasło"})
		return
	}

	var foundUser internal.User
	if err := internal.DB.Where("email = ?", loginData.Email).First(&foundUser).Error; err != nil {
		ctx.JSON(http.StatusUnauthorized, gin.H{"error": "Błędny email lub hasło"})
		return
	}

	if !hashCompare(loginData.Password, foundUser.Password) {
		ctx.JSON(http.StatusUnauthorized, gin.H{"error": "Błędne hasło"})
		return
	}

	token, err := generateToken(foundUser.Email, foundUser.Role)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Błąd generowania tokenu"})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{
		"message": "Zalogowano pomyślnie",
		"token":   token,
	})
}

func ChangePassword(ctx *gin.Context) {
	var input internal.ChangePasswordInput

	if err := ctx.ShouldBindJSON(&input); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Niepoprawne dane"})
		return
	}

	email, _ := ctx.Get("user_email")
	var user internal.User

	if err := internal.DB.Where("email = ?", email).First(&user).Error; err != nil {
		ctx.JSON(http.StatusNotFound, gin.H{"error": "Użytkownik nie istnieje"})
		return
	}

	if !hashCompare(input.OldPassword, user.Password) {
		ctx.JSON(http.StatusUnauthorized, gin.H{"error": "Stare hasło jest niepoprawne"})
		return
	}

	newHash, _ := hashPassword(input.NewPassword)
	if err := internal.DB.Model(&user).Update("password", newHash).Error; err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Nie udało się zmienić hasła"})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"message": "Hasło zmienione pomyślnie"})
}

// helpery
func hashPassword(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	return string(bytes), err
}

func hashCompare(password, hash string) bool {
	return bcrypt.CompareHashAndPassword([]byte(hash), []byte(password)) == nil
}

func generateToken(email string, role string) (string, error) {
	claims := jwt.MapClaims{
		"email": email,
		"role":  role,
		"exp":   time.Now().Add(time.Hour * 72).Unix(),
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(internal.JwtKey)
}
