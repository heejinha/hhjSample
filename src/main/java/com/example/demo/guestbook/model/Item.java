package com.example.demo.guestbook.model;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;

@Entity
@Inheritance(strategy = InheritanceType.JOINED) // 상속 전략
@DiscriminatorColumn(name = "type") // 구분 하는 칼럼
@Getter
@Setter
public abstract class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "no")
    private Integer no;

    @Column(name = "name")
    private String name;

    @Column(name = "price")
    private Integer price;
}
