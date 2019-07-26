package com.example.demo.h2gis.model;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QCity is a Querydsl query type for City
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QCity extends EntityPathBase<City> {

    private static final long serialVersionUID = 859359793L;

    public static final QCity city = new QCity("city");

    public final StringPath name = createString("name");

    public final NumberPath<Integer> number = createNumber("number", Integer.class);

    public final NumberPath<Long> pk = createNumber("pk", Long.class);

    // custom
    public final com.querydsl.spatial.PointPath theGeom = new com.querydsl.spatial.PointPath(forProperty("theGeom"));

    public QCity(String variable) {
        super(City.class, forVariable(variable));
    }

    public QCity(Path<? extends City> path) {
        super(path.getType(), path.getMetadata());
    }

    public QCity(PathMetadata metadata) {
        super(City.class, metadata);
    }

}

