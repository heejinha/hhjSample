package com.example.demo.guestbook.model;

import java.util.Date;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="guestbook")
@Getter
@Setter
public class Guestbook {
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private Integer no;

  @Column(name="name", nullable=false, length=100)
  private String name;

  @Column(name="pwd", nullable=false, length=64)
  private String pwd;

  @Column(name="message", nullable=false)
  private String message;
  
  @Column(name="tell", nullable=false, length=100)
  private String tell;

  @Temporal(TemporalType.TIMESTAMP)
  @Column(name="reg_date", nullable=false)
  private Date regDate;
}
