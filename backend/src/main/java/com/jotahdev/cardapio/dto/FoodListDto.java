package com.jotahdev.cardapio.dto;

import com.jotahdev.cardapio.entities.Food;

public record FoodListDto(Long id, String title, String image, Integer price) {
    public FoodListDto(Food food) {
        this(food.getId(), food.getTitle(), food.getImage(), food.getPrice());
    }
}
