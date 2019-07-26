package com.example.demo.guestbook.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.guestbook.model.Guestbook;

public interface GuestbookRepository extends JpaRepository<Guestbook, Integer> {

}
