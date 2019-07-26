package com.example.demo.guestbook.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;


@Entity
@Getter
@Setter
public class Menu {

    @Id
    @Column(name="code", nullable=false, length=64)
    private String code;

    @Column(name="upper_code", length=64)
    private String upper_code;

    @Column(name="code_name", nullable=false, length=64)
    private String code_name;

    @Column(name="prn_sqe", nullable=false)
    private double prn_sqe;

    @Column(name="ues_yn", nullable=false, length=1)
    private String ues_yn;

}
