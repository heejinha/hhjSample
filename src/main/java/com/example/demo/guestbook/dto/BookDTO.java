package com.example.demo.guestbook.dto;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Slf4j
public class BookDTO {
    private Integer no;
    private String title;

    // DTO 사용 ( new 명령어 )
    public static void useDTO(EntityManager em) {
        // 유사 검색
        // String jpql = "select b from Board b where b.title LIKE CONCAT('%',:kwd,'%') ";
        // 조인 방법1
        // String jpql = "SELECT b.title, c.name FROM Book b, Category c WHERE b.no = b.category.no";
        // 조인 방법2
        // String jpql = "SELECT b, c FROM Book b JOIN b.category c";

        String jpql = "SELECT new com.example.demo.dto.BookDTO(b.no, b.title) FROM Book b";

        TypedQuery<BookDTO> query = em.createQuery(jpql, BookDTO.class);

        List<BookDTO> list = query.getResultList();
        for (BookDTO dto : list) {
            log.debug(dto.getTitle());
        }
    }

}
