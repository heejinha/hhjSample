<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>sample page</title>
	<link href="./js/jqueryui/jquery-ui.css" rel="stylesheet">
    <script src="./js/veu/vue.js"></script>
    <script src="./js/jquery/jquery-3.3.1.js"></script>
    <script src="./js/jqueryui/jquery-ui.js"></script>
     <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script type="text/javascript">
        var gaia3d = {};
        gaia3d.guestBook = {};
    </script>
</head>
<%
    pageContext.setAttribute("newLine", "\n");
%>
<body>

	<!-- 상세조회 -->
	<table id="detailView" border="1" style="width: 500px" title="상세조회">
         <tr>
             <td>이름</td>
             <td>{{dtlName}}</td>
         </tr>
         <tr>
             <td>연락처</td>
             <td>{{dtlTell}}</td>
         </tr>
         <tr>
             <td>메시지 내용</td>
<!--              <td colspan=2 style="white-space: pre"> -->
             <td colspan=2>
             	{{dtlMessage}}
             </td>
         </tr>
         <tr>
             <td>등록일자</td>
             <td>{{dtlRegDate}}</td>
         </tr>
         <tr>
             <td>test</td>
             <td>test</td>
         </tr>
    </table>
    <script type="text/javascript">
    	gaia3d.guestBook.detailDialog = $("#detailView").dialog({
    		autoOpen : false,
    		modal : true,
    		width : 500
    	});
    	gaia3d.guestBook.detail = new Vue({
    		el : "#detailView",
    		data : {
    			dtlName : '',
    			dtlTell : '',
    			dtlMessage : '',
    			dtlRegDate : ''
    		}
    	});
    </script>
    
    <!-- 삭제 -->
    <table id="deleteView" title="삭제">
        <tr>
            <td>비밀번호</td>
            <td>
            	<input type="password" name="pwd" v-model="insPwd">
            </td>
            <td>
            	<button v-on:click="deleteConfirm(delNo, delPwd)">삭제</button>
            </td>
        </tr>
    </table>
    <script type="text/javascript">
    	gaia3d.guestBook.deleteViewDialog = $("#deleteView").dialog({
    		autoOpen : false,
    		modal : true,
    		width : 500
    	}); 
    
    	gaia3d.guestBook.deleteData = new Vue({
    		el : "#deleteView",
    		data : {
    			delNo : '',
    			delPwd : '',
    			insPwd : ''
    		},
    		methods : {
    			deleteConfirm : function (no, pwd) {
    				
    				//비밀번호 체크
    				if(pwd !== this.insPwd) {
    					alert("비밀번호 확인 필요");
    					return;
    				}
    				
    				$.ajax({
	    				type: "POST",
	    				url: "exapmleDelete",
	    				data : {
	    					"no" : no
	    				}
	    			}).done(function(data) {
	    				//삭제화면창 닫기
	    				gaia3d.guestBook.deleteViewDialog.dialog('close');
	    				
	    				//초기 리스트 조회
	    		    	gaia3d.guestBook.list.search();
	    			});
    				
    			}
    		}
    	});
    </script>
    
	<!-- 목록조회 -->
	<div id="list">
        <table style="width: 500" border="1px">
        	<tr>
                <td>순번</td>
                <td>작성자</td>
                <td>등록일자</td>
                <td>연락처</td>
                <td>메시지</td>
                <td>비고</td>
            </tr>
            <tbody>
                <tr v-for="(guestbook, index) in guestbooks" v-on:click="detail(guestbook.no);" style="cursor:pointer;">
                    <td>{{guestbook.no}}</td>
                    <td>{{guestbook.name}}</td>
                    <td>{{guestbook.regDate}}</td>
                    <td>{{guestbook.tell}}</td>
                    <td>{{guestbook.message}}</td>
                    <td><button v-on:click.stop="deleteView(guestbook.no)">삭제</button></td>
                </tr>
            </tbody>
        </table>
        <button v-on:click="insertView()">등록</button>
    </div>
    <script type="text/javascript">
    	gaia3d.guestBook.list = new Vue({
    		el : "#list",
    		data : {
    			guestbooks : []
    		},
    		methods : {
	    		search : function () {
	    			var _this = this;
	    			$.ajax({
	    				contentType: 'application/json; charset=utf-8',
	    				type: "POST",
	    				url: "exapmleSearch" 
	    			}).done(function(data) {
	    				if(data.length > 0){
	    					_this.guestbooks = data;
	    				}
	    			});
	    		},
	    		detail : function (no) {
    				$.ajax({
	    				type: "POST",
	    				data : {
	    					"no" : no
		    			},
	    				url: "exapmleDetail" 
	    			}).done(function(data) {
	    				if(data != null){
    						//상세보기 화면 표츌 값 셋팅
    						gaia3d.guestBook.detail.dtlName = data.name;
    						gaia3d.guestBook.detail.dtlTell = data.tell;
    						gaia3d.guestBook.detail.dtlMessage = data.message;
    						gaia3d.guestBook.detail.dtlRegDate = data.regDate;
    						//상세보기 다이얼로그 창 열기
    						gaia3d.guestBook.detailDialog.dialog('open');
	    				}
	    			});
    			},
    			deleteView : function (no) {
    				$.ajax({
	    				type: "POST",
	    				data : {
	    					"no" : no
		    			},
	    				url: "exapmleDetail" 
	    			}).done(function(data) {
    						//삭제하려는 값 셋팅
    						gaia3d.guestBook.deleteData.delNo = data.no;
    						gaia3d.guestBook.deleteData.delPwd = data.pwd;
    						//삭제화면 다이얼로그 창 열기
    						gaia3d.guestBook.deleteViewDialog.dialog('open');
	    			});
    			}
    		}
    	});
    	
    	//초기 리스트 조회
    	gaia3d.guestBook.list.search();
    </script>
	
</body>
</html>