package com.jotahdev.cardapio.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jotahdev.cardapio.entities.Food;

public interface FoodRepository extends JpaRepository<Food, Long> {
    
}
