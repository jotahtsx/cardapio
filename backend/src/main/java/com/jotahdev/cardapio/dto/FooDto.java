package com.jotahdev.cardapio.dto;

import com.jotahdev.cardapio.entities.Food;

public record FooDto(Long id, String title, String image, Integer price) {
    public FooDto(Food food) {
        this(food.getId(), food.getTitle(), food.getImage(), food.getPrice());
    }
}
