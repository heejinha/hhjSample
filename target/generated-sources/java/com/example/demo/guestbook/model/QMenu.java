package com.example.demo.guestbook.model;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QMenu is a Querydsl query type for Menu
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QMenu extends EntityPathBase<Menu> {

    private static final long serialVersionUID = -1191742741L;

    public static final QMenu menu = new QMenu("menu");

    public final StringPath code = createString("code");

    public final StringPath code_name = createString("code_name");

    public final NumberPath<Double> prn_sqe = createNumber("prn_sqe", Double.class);

    public final StringPath ues_yn = createString("ues_yn");

    public final StringPath upper_code = createString("upper_code");

    public QMenu(String variable) {
        super(Menu.class, forVariable(variable));
    }

    public QMenu(Path<? extends Menu> path) {
        super(path.getType(), path.getMetadata());
    }

    public QMenu(PathMetadata metadata) {
        super(Menu.class, metadata);
    }

}

