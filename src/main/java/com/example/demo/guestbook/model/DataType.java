package com.example.demo.guestbook.model;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;


@Entity
@Getter
@Setter
public class DataType {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer seqNo;

    @Column(name="ltype", length=64)
    private String ltype;

    @Column(name="mtype", length=64)
    private String mtype;

    @Column(name="stype", length=64)
    private String stype;

    @Column(name="dtype", length=64)
    private String dtype;

    @Column(name="att1", length=64)
    private String att1;

    @Column(name="att2", length=64)
    private String att2;

    @Column(name="ues_yn", nullable=false, length=1)
    private String ues_yn;

}
