package com.example.demo.guestbook.service.impl;

import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.stereotype.Component;

import com.example.demo.guestbook.model.Guestbook;
import com.example.demo.guestbook.repository.GuestbookRepository;
import com.example.demo.guestbook.service.GuestbookService;

@Component
@Transactional
//@EnableAsync(proxyTargetClass = true)
@EnableCaching(proxyTargetClass = true)
public class GuestbookServiceImpl implements GuestbookService {
    @Autowired
    private GuestbookRepository guestbookRepository;

    public List<Guestbook> getMessageList() {
        return guestbookRepository.findAll();
    }

    public Guestbook insertMessage(Guestbook guestbook) {
        guestbook.setRegDate(new Date());
        Guestbook g = guestbookRepository.save(guestbook);
        return g;
    }

    public Guestbook deleteMessage(Guestbook guestbook) {
        guestbookRepository.delete(guestbook);
        return guestbook;
    }

    @Override
    public Guestbook deleteMessage(Integer id) {
        Guestbook g = guestbookRepository.findOne(id);
        return deleteMessage(g);
    }

    @Override
    public Guestbook getMessage(Integer id) {
        return guestbookRepository.findOne(id);
    }
}
