package main

import (
	"github.com/glebarez/sqlite"
	"gorm.io/gorm"
)

var (
	DB *gorm.DB
)

type AnimalProfile struct {
	ID           string `gorm:"primaryKey" json:"uid"`
	Name         string `gorm:"not null" json:"name" binding:"required"`
	Species      string `gorm:"not null" json:"species" binding:"required"`
	Contact      string `gorm:"not null" json:"contact"`
	MedicalNotes string `gorm:"not null" json:"medicalnotes"`
	Personality  string `gorm:"not null" json:"personality"`
}

type UpdateAnimalInput struct {
	Name         string `json:"name"`
	Species      string `json:"species"`
	Contact      string `json:"contact"`
	MedicalNotes string `json:"medicalnotes"`
	Personality  string `json:"personality"`
}

func initDB() {
	var err error

	DB, err = gorm.Open(sqlite.Open("animalfind.db"), &gorm.Config{})
	if err != nil {
		panic("db error:" + err.Error())
	}

	DB.AutoMigrate(&AnimalProfile{})
}
