package pkg

import (
	"animalfind/internal"
	"crypto/rand"
	"math/big"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

func GenerateToken(ctx *gin.Context) {
	// dodac sprawdzanie jakiegos klucza here aby nikt nie generowal tokenow

	newToken := "AnimFind-" + randomString(4) + "-" + randomString(4) + "-" + randomString(4)
	newID := uuid.New().String()

	newProfile := internal.AnimalProfile{
		ID:              newID,
		ActivationToken: newToken,
		IsActive:        false,
	}

	if err := internal.DB.Create(&newProfile).Error; err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "internal server error"})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{
		"status": "Data generated",
		"token":  newToken,                           // usunac potem chyba
		"url":    "https://animalfind/a/" + newToken, // zrobic pozniej z env iwgl aby nie bylo jebania
	})
}

func randomString(n int) string {
	const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
	ret := make([]byte, n)
	for i := range ret {
		num, _ := rand.Int(rand.Reader, big.NewInt(int64(len(chars))))
		ret[i] = chars[num.Int64()]
	}
	return string(ret)
}
