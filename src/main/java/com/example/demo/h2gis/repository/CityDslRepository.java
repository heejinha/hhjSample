package com.example.demo.h2gis.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.support.QueryDslRepositorySupport;
import org.springframework.stereotype.Repository;

import com.example.demo.h2gis.model.City;
import com.example.demo.h2gis.model.QCity;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQuery;

@Repository
public class CityDslRepository extends QueryDslRepositorySupport {


    private QCity qcity = QCity.city;

    public CityDslRepository() {
        super(City.class);
    }

    public Page<City> findDistance(City city, Pageable pageable) {
        JPAQuery<City> query = new JPAQuery<City>(getEntityManager());
        query.from(qcity)
        .where(Expressions.booleanTemplate("ST_Distance({0}, {1}) > {2} ",  qcity.theGeom, city.getTheGeom(), 20));
        final List<City> list = getQuerydsl().applyPagination(pageable, query).fetch();
        return new PageImpl<City>(list, pageable, query.fetchCount());
    }

    public Page<City> findQCtiyDistance(City city, Pageable pageable) {
        JPAQuery<City> query = new JPAQuery<City>(getEntityManager());
        query.from(qcity)
        .where(qcity.theGeom.intersects(city.getTheGeom()));
        final List<City> list = getQuerydsl().applyPagination(pageable, query).fetch();
        return new PageImpl<City>(list, pageable, query.fetchCount());
    }
}
