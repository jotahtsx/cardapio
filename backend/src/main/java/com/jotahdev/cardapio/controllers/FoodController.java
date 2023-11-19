package com.jotahdev.cardapio.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jotahdev.cardapio.dto.FoodCreateDto;
import com.jotahdev.cardapio.dto.FoodListDto;
import com.jotahdev.cardapio.entities.Food;
import com.jotahdev.cardapio.repositories.FoodRepository;

@RestController
@RequestMapping("food")
public class FoodController {

    @Autowired
    private FoodRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void createFood(@RequestBody FoodCreateDto data) {
        Food FoodCreateDto = new Food(data);
        repository.save(FoodCreateDto);
        return;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<FoodListDto> getAll() {
        
        List<FoodListDto> foodList = repository.findAll().stream().map(FoodListDto::new).toList();
        return foodList;

    }
}
