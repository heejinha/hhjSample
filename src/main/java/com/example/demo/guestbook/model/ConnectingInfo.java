package com.example.demo.guestbook.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class ConnectingInfo {
    @Id
    @Column(name="code", nullable=false, length=64)
    private String code;

    // @Column(name="seq_no")
    private Integer seqNo;
}