package com.example.demo.guestbook.model;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QConnectingInfo is a Querydsl query type for ConnectingInfo
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QConnectingInfo extends EntityPathBase<ConnectingInfo> {

    private static final long serialVersionUID = 1600068114L;

    public static final QConnectingInfo connectingInfo = new QConnectingInfo("connectingInfo");

    public final StringPath code = createString("code");

    public final NumberPath<Integer> seqNo = createNumber("seqNo", Integer.class);

    public QConnectingInfo(String variable) {
        super(ConnectingInfo.class, forVariable(variable));
    }

    public QConnectingInfo(Path<? extends ConnectingInfo> path) {
        super(path.getType(), path.getMetadata());
    }

    public QConnectingInfo(PathMetadata metadata) {
        super(ConnectingInfo.class, metadata);
    }

}

