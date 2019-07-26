package com.example.demo.guestbook.repository;


import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

import com.example.demo.guestbook.model.Guestbook;
import com.example.demo.guestbook.model.QGuestbook;
import com.querydsl.jpa.impl.JPAQuery;

@Repository
public class GuestbookRepositoryDSL {

    @PersistenceContext // EntityManagerFactory가 DI 할 수 있도록 어노테이션 설정
    private EntityManager em;
    
    private QGuestbook guestbook =  QGuestbook.guestbook; 
    
    public List<Guestbook> findAll() {
    	
        JPAQuery<Guestbook> query = new JPAQuery<>(em);
        List<Guestbook> guestbookList = query.from(guestbook).orderBy(guestbook.regDate.desc()).fetch();
        return guestbookList;
    }

    public void save(Guestbook guestbook) {
        em.persist(guestbook);
    }

    public boolean remove(Guestbook paramGuestbook) {
        JPAQuery<Guestbook> query = new JPAQuery<>(em);
        List<Guestbook> guestbookList = query.from(guestbook).where(guestbook.no.eq(paramGuestbook.getNo())
                                                                .and(guestbook.pwd.eq(paramGuestbook.getPwd()))).fetch();
        if (guestbookList.size() != 1) {
            return false;
        }
        em.remove(guestbookList.get(0));

        return true;
    }

}