package com.example.demo.h2gis.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.h2gis.model.City;

public interface CityRepository extends JpaRepository<City, Long> {

}
