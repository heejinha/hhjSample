package com.example.demo.guestbook.model;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QSender is a Querydsl query type for Sender
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QSender extends EntityPathBase<Sender> {

    private static final long serialVersionUID = 1663255745L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QSender sender = new QSender("sender");

    public final QAddress address;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final QName name;

    public QSender(String variable) {
        this(Sender.class, forVariable(variable), INITS);
    }

    public QSender(Path<? extends Sender> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QSender(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QSender(PathMetadata metadata, PathInits inits) {
        this(Sender.class, metadata, inits);
    }

    public QSender(Class<? extends Sender> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.address = inits.isInitialized("address") ? new QAddress(forProperty("address")) : null;
        this.name = inits.isInitialized("name") ? new QName(forProperty("name")) : null;
    }

}

