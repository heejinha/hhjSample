package com.example.demo.guestbook.control;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.guestbook.model.Guestbook;
import com.example.demo.guestbook.service.GuestbookService;

@Controller
@RequestMapping("/guests")
public class GuestbookVueController {
    @Autowired
    private GuestbookService guestbookServiceImpl;

    @RequestMapping(value = "", method = RequestMethod.GET)
    @ResponseBody
    public Object list() {
        return guestbookServiceImpl.getMessageList();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    @ResponseBody
    public Object get(@PathParam("id") Integer id) {
        return guestbookServiceImpl.getMessageList();
    }

    @RequestMapping(value = "", method = RequestMethod.POST)
    @ResponseBody
    public Object insert(Guestbook guestbook) {
        Guestbook g = guestbookServiceImpl.insertMessage(guestbook);
        return g;
    }

    @RequestMapping(value = "", method = RequestMethod.PUT)
    @ResponseBody
    public Object update(Guestbook guestbook) {
        Guestbook g = guestbookServiceImpl.insertMessage(guestbook);
        return g;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public Object delete(@PathParam("id") Integer id) {
        Guestbook g = guestbookServiceImpl.deleteMessage(id);
        return g;
    }

}
