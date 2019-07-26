package com.example.demo.guestbook.model;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QGuestbook is a Querydsl query type for Guestbook
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QGuestbook extends EntityPathBase<Guestbook> {

    private static final long serialVersionUID = -1905658187L;

    public static final QGuestbook guestbook = new QGuestbook("guestbook");

    public final StringPath message = createString("message");

    public final StringPath name = createString("name");

    public final NumberPath<Integer> no = createNumber("no", Integer.class);

    public final StringPath pwd = createString("pwd");

    public final DateTimePath<java.util.Date> regDate = createDateTime("regDate", java.util.Date.class);

    public final StringPath tell = createString("tell");

    public QGuestbook(String variable) {
        super(Guestbook.class, forVariable(variable));
    }

    public QGuestbook(Path<? extends Guestbook> path) {
        super(path.getType(), path.getMetadata());
    }

    public QGuestbook(PathMetadata metadata) {
        super(Guestbook.class, metadata);
    }

}

