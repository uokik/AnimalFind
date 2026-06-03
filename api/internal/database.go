package internal

import (
	"time"

	"github.com/glebarez/sqlite"
	"gorm.io/gorm"
)

var JwtKey []byte

var (
	DB *gorm.DB
)

type AnimalProfile struct {
	ID                string `gorm:"primaryKey" json:"uid"`
	ActivationToken   string `gorm:"uniqueIndex;not null" json:"activation_token"`
	IsActive          bool   `gorm:"default:false" json:"is_active"`
	OwnerID           uint   `json:"owner_id"`
	Name              string `json:"name"`
	Species           string `json:"species"`
	Breed             string `json:"breed"`
	Contact           string `json:"contact"`
	MedicalNotes      string `json:"medical_notes"`
	Personality       string `json:"personality"`
	ProfileImageURL   string `json:"profile_image_url"`
	Sex               string `json:"sex"`
	Age               string `json:"age"`
	City              string `json:"city"`
	Medications       string `json:"medications"`
	Allergies         string `json:"allergies"`
	VetInfo           string `json:"vet_info"`
	ChronicConditions string `json:"chronic_conditions"`
}

type AnimalProfileResponse struct {
	ID                string `json:"uid"`
	Name              string `json:"name"`
	Species           string `json:"species"`
	Breed             string `json:"breed"`
	Contact           string `json:"contact"`
	MedicalNotes      string `json:"medical_notes"`
	Personality       string `json:"personality"`
	ProfileImageURL   string `json:"profile_image_url"`
	Sex               string `json:"sex"`
	Age               string `json:"age"`
	City              string `json:"city"`
	Medications       string `json:"medications"`
	Allergies         string `json:"allergies"`
	VetInfo           string `json:"vet_info"`
	ChronicConditions string `json:"chronic_conditions"`
}

type ChangePasswordInput struct {
	OldPassword string `json:"old_password" binding:"required"`
	NewPassword string `json:"new_password" binding:"required,min=8"`
}

type RegisterRequest struct {
	Email    string `json:"email" binding:"required,email"`
	Password string `json:"password" binding:"required,min=8"`
}

type User struct {
	ID        uint      `gorm:"primaryKey" json:"uid"`
	Role      string    `gorm:"default:'user'" json:"role"`
	Email     string    `gorm:"unique;not null" json:"email"`
	Password  string    `gorm:"not null" json:"password"`
	CreatedAt time.Time `json:"registered"`
}

type UpdateAnimalInput struct {
	Name         string `json:"name"`
	Species      string `json:"species"`
	Contact      string `json:"contact"`
	MedicalNotes string `json:"medicalnotes"`
	Personality  string `json:"personality"`
}

func InitDB() {
	var err error

	DB, err = gorm.Open(sqlite.Open("animalfind.db"), &gorm.Config{})
	if err != nil {
		panic("db error:" + err.Error())
	}

	DB.AutoMigrate(&AnimalProfile{}, &User{})
}
