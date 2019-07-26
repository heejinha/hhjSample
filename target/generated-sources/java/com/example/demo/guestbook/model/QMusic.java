package com.example.demo.guestbook.model;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QMusic is a Querydsl query type for Music
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QMusic extends EntityPathBase<Music> {

    private static final long serialVersionUID = 1711161881L;

    public static final QMusic music = new QMusic("music");

    public final QItem _super = new QItem(this);

    public final StringPath artist = createString("artist");

    //inherited
    public final StringPath name = _super.name;

    //inherited
    public final NumberPath<Integer> no = _super.no;

    //inherited
    public final NumberPath<Integer> price = _super.price;

    public QMusic(String variable) {
        super(Music.class, forVariable(variable));
    }

    public QMusic(Path<? extends Music> path) {
        super(path.getType(), path.getMetadata());
    }

    public QMusic(PathMetadata metadata) {
        super(Music.class, metadata);
    }

}

