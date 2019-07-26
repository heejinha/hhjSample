package com.example.demo.guestbook.service;

import java.util.List;

import com.example.demo.guestbook.model.Guestbook;

public interface GuestbookService {

    public List<Guestbook> getMessageList();

    public Guestbook getMessage(Integer id);

    public Guestbook insertMessage(Guestbook guestbook);

    public Guestbook deleteMessage(Guestbook guestbook);

    public Guestbook deleteMessage(Integer id);
}
