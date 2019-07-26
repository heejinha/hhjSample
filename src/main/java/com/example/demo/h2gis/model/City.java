package com.example.demo.h2gis.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import org.geolatte.geom.C2D;
import org.geolatte.geom.Point;

import lombok.*;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class City {
    @Id
    private Long pk;

    @Column(columnDefinition = "Geometry")
    private Point<C2D> theGeom;
    private String name;
    private Integer number;
}
