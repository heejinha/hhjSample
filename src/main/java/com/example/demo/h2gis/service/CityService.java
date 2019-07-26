package com.example.demo.h2gis.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.h2gis.repository.CityRepository;

@Service
@Transactional
public class CityService {

    @Autowired
    private CityRepository rep;


}
