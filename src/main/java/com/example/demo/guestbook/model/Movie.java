package com.example.demo.guestbook.model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

import lombok.Getter;
import lombok.Setter;

@Entity
@DiscriminatorValue("movie")
@Getter
@Setter
public class Movie extends Item {
    private String actor;
}