package com.jotahdev.cardapio.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jotahdev.cardapio.dto.FooDto;
import com.jotahdev.cardapio.repositories.FoodRepository;

@RestController
@RequestMapping("food")
public class FoodController {

    @Autowired
    private FoodRepository repository;

    @GetMapping
    public List<FooDto> getAll() {
        
        List<FooDto> foodList = repository.findAll().stream().map(FooDto::new).toList();
        return foodList;

    }
}
