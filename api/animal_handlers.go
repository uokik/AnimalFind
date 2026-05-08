package main

import (
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

func GetAnimal(ctx *gin.Context) {
	identity := ctx.Param("identity")
	var profile AnimalProfile

	if err := DB.First(&profile, "id = ?", identity).Error; err != nil {
		ctx.JSON(http.StatusNotFound, gin.H{"error": "Animal not found"})
		return
	}

	ctx.JSON(http.StatusOK, profile)
}

func AddAnimal(ctx *gin.Context) {
	var newAnimal AnimalProfile

	if err := ctx.ShouldBindJSON(&newAnimal); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "You must fill out all required fields"})
		return
	}

	if strings.TrimSpace(newAnimal.Name) == "" {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Name can not be blank"})
		return
	}

	newAnimal.ID = uuid.New().String()

	if err := DB.Create(&newAnimal).Error; err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Internal Server Error"})
		return
	}

	ctx.JSON(http.StatusCreated, newAnimal)
}

func UpdateAnimal(ctx *gin.Context) {
	identity := ctx.Param("identity")
	var input UpdateAnimalInput

	if err := ctx.ShouldBindJSON(&input); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Bad request"})
		return
	}

	result := DB.Model(&AnimalProfile{}).Where("id = ?", identity).Updates(input)

	if result.Error != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Internal server error"})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"status": "Profile updated"})

}
