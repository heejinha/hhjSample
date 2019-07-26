package com.example.demo.guestbook.model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

import com.vividsolutions.jts.geom.Geometry;

import lombok.Getter;
import lombok.Setter;

@Entity
@DiscriminatorValue("book")
@Getter
@Setter
public class Book extends Item {
    private String writer;


    private Geometry geometry;
}