package com.example.demo.guestbook.model;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class Name {
    @Column(name = "first_name")
    private String first;
    @Column(name = "last_name")
    private String last;

    public String getFullName() {
        return this.first + this.last;
    }
}
