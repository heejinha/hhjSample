package com.example.demo.h2gis.repository;

import static org.assertj.core.api.Assertions.assertThat;

import javax.transaction.Transactional;

import org.geolatte.geom.C2D;
import org.geolatte.geom.Point;
import org.geolatte.geom.codec.Wkt;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.example.demo.DemoApplication;
import com.example.demo.h2gis.model.City;

import lombok.extern.slf4j.Slf4j;

@Configuration
@EnableAutoConfiguration
@RunWith(SpringRunner.class)
@SpringBootTest(classes = DemoApplication.class)
@EnableTransactionManagement
@Transactional
@Slf4j
public class TestCityDslRepository {

    @Autowired
    private CityDslRepository rep;

    // private GeometryFactory geometryFactory = JTSFactoryFinder.getGeometryFactory();
    @Test
    public void select()  {

        log.info("============================ select");
        // Point point = geometryFactory.createPoint(new Coordinate(10, 10));
        @SuppressWarnings("unchecked")
        Point<C2D> point = (Point<C2D>) Wkt.fromWkt("POINT (1 1)");
        Pageable pageable = new PageRequest(1, 20);
        log.info("============" + point.toString());

        City city = City.builder().pk(10l).name("test").theGeom(point).build();
        Page<City> p = (Page<City>) rep.findDistance(city, pageable);

        assertThat(p.getNumberOfElements()).isEqualTo(0);
        log.info("============================ select");
    }

    @Test
    public void selectQCity()  {

        log.info("============================ selectQCity");
        // Point point = geometryFactory.createPoint(new Coordinate(10, 10));
        @SuppressWarnings("unchecked")
        Point<C2D> point = (Point<C2D>) Wkt.fromWkt("POINT (1 1)");
        Pageable pageable = new PageRequest(1, 20);

        City city = City.builder().pk(10l).name("test").theGeom(point).build();
        Page<City> p = (Page<City>) rep.findQCtiyDistance(city, pageable);

        assertThat(p.getNumberOfElements()).isEqualTo(0);
        log.info("============================ selectQCity");
    }



}
