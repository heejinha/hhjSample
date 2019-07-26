package com.example.demo.guestbook.control;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.example.demo.guestbook.model.Guestbook;
import com.example.demo.guestbook.service.impl.GuestbookServiceImpl;

import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
public class GuestbookController {
    @Autowired
    private GuestbookServiceImpl guestbookService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String index(Model model) {
        List<Guestbook> guestbookList = guestbookService.getMessageList();
        model.addAttribute("guestbookList", guestbookList);
        return "index";
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public String add(Guestbook guestbook) {
        guestbookService.insertMessage(guestbook);
        return "redirect:/";
    }

    @RequestMapping(value = "/delete", method = RequestMethod.GET)
    public String deleteform() {
        return "deleteform";
    }

    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    public String delete(Guestbook guestbook) {
        guestbookService.deleteMessage(guestbook);
        return "redirect:/";
    }

    @RequestMapping(value = "/request")
    public String request() {
        log.info("=================> reuest");
        return "request";
    }

    @RequestMapping(value = "/timeout")
    public String timeOut() {
        log.info("=================> timeout");
        return "timeout";
    }

    //
    @RequestMapping(value = "/yhjeong", method = RequestMethod.GET)
    public String getTest(String watchCode, String date, String fileName) {
        log.info("=================> getTest: " + fileName);
        return "timeout";
    }
    // -watchCode FF -date 20170724000000 -fileName gk2a_ami_le2_ff_fd020ge_201707240000.nc
    @RequestMapping(value = "/yhjeong", method = RequestMethod.POST)
    public String postTest(String watchCode, String date, String fileName) {
        log.info("=================> postTest: " + fileName);
        return "timeout";
    }
    
    @RequestMapping(value = "/exampleIndex", method = RequestMethod.GET)
    public String exampleIndex(Model model) {
        List<Guestbook> guestbookList = guestbookService.getMessageList();
        model.addAttribute("guestbookList", guestbookList);
        return "example/index";
    }
    
    @RequestMapping(value = "/exampleSearch", method = RequestMethod.POST)
    @ResponseBody
    public List<Guestbook> exampleSearch(Model model) {
        List<Guestbook> guestbookList = guestbookService.getMessageList();
        return guestbookList;
    }
    
    @RequestMapping(value = "/exampleDetail", method = RequestMethod.POST)
    @ResponseBody
    public Guestbook exampleDetail(Guestbook guestbook,  Model model) {
    	Guestbook guestbookData = guestbookService.getMessage(guestbook.getNo());
    	return guestbookData;
    }
    
    @RequestMapping(value = "/exampleDelete", method = RequestMethod.POST)
    @ResponseBody
    public void exampleDelete(Guestbook guestbook,  Model model) {
    	guestbookService.deleteMessage(guestbook.getNo());
    }
    
    @RequestMapping(value = "/exampleInsert", method = RequestMethod.POST)
    @ResponseBody
    public void exampleInsert(Guestbook guestbook) {
    	
    	System.out.println("======guestbook nbgvcvuio;m',.3 name : " + guestbook.getName());
    	System.out.println("======guestbook pwd : " + guestbook.getPwd());
    	System.out.println("======guestbook tell : " + guestbook.getTell());
    	System.out.println("======guestbook message : " + guestbook.getMessage());
    	guestbookService.insertMessage(guestbook);
    }
    
    @RequestMapping(value = "exampleUpdate", method = RequestMethod.POST)
    @ResponseBody
    public void exampleUpdate(Guestbook guestbook) {
    	//수정쿼리 jpa에서 merge 사용해야 할듯
    }
}
