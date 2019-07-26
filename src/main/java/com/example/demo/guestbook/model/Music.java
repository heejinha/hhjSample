package com.example.demo.guestbook.model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

import lombok.Getter;
import lombok.Setter;

@Entity
@DiscriminatorValue("music")
@Getter
@Setter
public class Music extends Item {
    private String artist;
}
