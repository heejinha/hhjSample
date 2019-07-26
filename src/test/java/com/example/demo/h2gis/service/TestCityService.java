package com.example.demo.h2gis.service;

import static org.assertj.core.api.Assertions.fail;

import org.geotools.feature.SchemaException;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Configuration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.example.demo.DemoApplication;

@Configuration
@EnableAutoConfiguration
@RunWith(SpringRunner.class)
@SpringBootTest(classes = DemoApplication.class)
@EnableTransactionManagement
public class TestCityService {

    @Test
    public void save() throws SchemaException {
        fail("not implement");
    }
}
