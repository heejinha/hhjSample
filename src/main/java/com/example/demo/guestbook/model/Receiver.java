package com.example.demo.guestbook.model;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Receiver {
    @Id
    @GeneratedValue
    private long id;
    @Embedded
    private Name name;
    @Embedded
    private Address address;
}
