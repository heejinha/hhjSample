package com.example.demo.guestbook.model;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QDataType is a Querydsl query type for DataType
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QDataType extends EntityPathBase<DataType> {

    private static final long serialVersionUID = 1202046352L;

    public static final QDataType dataType = new QDataType("dataType");

    public final StringPath att1 = createString("att1");

    public final StringPath att2 = createString("att2");

    public final StringPath dtype = createString("dtype");

    public final StringPath ltype = createString("ltype");

    public final StringPath mtype = createString("mtype");

    public final NumberPath<Integer> seqNo = createNumber("seqNo", Integer.class);

    public final StringPath stype = createString("stype");

    public final StringPath ues_yn = createString("ues_yn");

    public QDataType(String variable) {
        super(DataType.class, forVariable(variable));
    }

    public QDataType(Path<? extends DataType> path) {
        super(path.getType(), path.getMetadata());
    }

    public QDataType(PathMetadata metadata) {
        super(DataType.class, metadata);
    }

}

