package com.example.demo.guestbook.model;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QBook is a Querydsl query type for Book
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QBook extends EntityPathBase<Book> {

    private static final long serialVersionUID = -1192060811L;

    public static final QBook book = new QBook("book");

    public final QItem _super = new QItem(this);

    // custom
    public final com.querydsl.spatial.jts.JTSGeometryPath geometry = new com.querydsl.spatial.jts.JTSGeometryPath(forProperty("geometry"));

    //inherited
    public final StringPath name = _super.name;

    //inherited
    public final NumberPath<Integer> no = _super.no;

    //inherited
    public final NumberPath<Integer> price = _super.price;

    public final StringPath writer = createString("writer");

    public QBook(String variable) {
        super(Book.class, forVariable(variable));
    }

    public QBook(Path<? extends Book> path) {
        super(path.getType(), path.getMetadata());
    }

    public QBook(PathMetadata metadata) {
        super(Book.class, metadata);
    }

}

