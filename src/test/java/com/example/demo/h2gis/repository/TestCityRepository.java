package com.example.demo.h2gis.repository;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;

import javax.transaction.Transactional;

import org.geolatte.geom.C2D;
import org.geolatte.geom.Point;
import org.geolatte.geom.codec.Wkt;
import org.geotools.feature.SchemaException;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Configuration;
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
public class TestCityRepository {

    @Autowired
    private CityRepository rep;

    // private GeometryFactory geometryFactory = JTSFactoryFinder.getGeometryFactory();

    @Test
    public void insert() throws SchemaException {
        log.info("============================ insert");
        // int srid = 4326;
        // Point point = geometryFactory.createPoint(new Coordinate(10, 10));
        // point.setSRID(srid);

        @SuppressWarnings("unchecked")
        Point<C2D> point = (Point<C2D>) Wkt.fromWkt("POINT (1 1)");

        City city = City.builder().pk(15l).name("seoul").theGeom(point).build();
        rep.save(city);

        city = City.builder().pk(17l).name("seoul").theGeom(point).build();
        rep.save(city);


        List<City> l = rep.findAll();
        assertThat(l.size()).isEqualTo(2);
        log.info("============================ insert");
    }

    @Test
    public void select() throws SchemaException {

        log.info("============================ select");
        List<City> l = rep.findAll();

        assertThat(l.size()).isEqualTo(15);
        log.info("============================ select");
    }

    // @Test
    public void update() throws SchemaException {

        log.info("============================ update");

        long num = 10;
        City city = City.builder().pk(num).name("seoul").build();
        rep.save(city);

        rep.findAll();

        City city2 = rep.findOne(num);
        city2.setName("daejeon");
        rep.save(city2);

        rep.findAll();

        City city3 = rep.findOne(num);

        assertThat(city).isNotEqualTo(city2);
        // assertThat(city2).isNotEqualTo(city3);
        assertThat(city3.getName()).isEqualTo("daejeon");

        log.info("============================ update");
    }

    // @Test
    public void delete() throws SchemaException {

        log.info("============================ delete");

        long num = 10;
        City city = City.builder().pk(num).name("seoul").build();
        rep.save(city);

        List<City> l = rep.findAll();
        assertThat(l.size()).isEqualTo(1);

        rep.delete(City.builder().pk(num).build());
        l = rep.findAll();
        assertThat(l.size()).isEqualTo(0);

        log.info("============================ delete");

    }
}
