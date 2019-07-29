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
    <style type="text/css">
    	body {font-family :sans-serif; font-size: 14px;}
    	#list {width: 700px; text-align: center; padding: 50px;}
    	#list table {width: 100%; border: 1px solid white; border-collapse: collapse;}
    	#list table tr {border-top: 1px solid black; border-bottom: 1px solid black;}
    	#list table tr.subject {border-top: 2px solid black; border-bottom: 2px solid black;}
    	#list table td, th {padding: 10px;}
    	#list .insertDiv {padding: 10px; float: right;}
    	#list button {padding: 6px 15px; background: rgb(102, 105, 107); color: white; font-weight: bold; border: none; border-: unset;}
    </style>
</head>
<%
    pageContext.setAttribute("newLine", "\n");
%>
<body>

	<!-- 상세조회 -->
	<table id="detailView" border="1" style="width: 500px" title="상세조회">
         <tr>
             <td>이름</td>
             <td>
             	<input type="text" v-model="dtlName" readonly="readonly">
             </td>
         </tr>
         <tr>
             <td>연락처</td>
             <td>
             	<input type="text" v-model="dtlTell" readonly="readonly">
             </td>
         </tr>
         <tr>
             <td>등록일자</td>
             <td>
             	<input type="text" v-model="dtlRegDate" readonly="readonly">
             </td>
         </tr>
         <tr>
             <td colspan=4 rowspan="span">
             	<textarea cols=60 rows=5 v-model="dtlMessage" readonly="readonly"></textarea>
             </td>
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
    			dtlName : "",
    			dtlTell : "",
    			dtlMessage : "",
    			dtlRegDate : ""
    		}
    	});
    </script>
    
    <!-- 등록 -->
    <table id="insertView" border="1" title="등록">
         <tr>
             <td>이름</td>
             <td>
             	<input type="text" v-model="insName">
             </td>
         </tr>
         <tr>
             <td>비밀번호</td>
             <td>
             	<input type="password" v-model="insPwd">
             </td>
         </tr>
         <tr>
             <td>연락처</td>
             <td>
             	<input type="text" v-model="insTell">
             </td>
         </tr>
         <tr>
             <td colspan=4 rowspan="span">
             	<textarea cols=60 rows=5 v-model="insMessage"></textarea>
             </td>
         </tr>
         <tr>
             <td colspan=4 align=right>
             	<button v-on:click="insertConfirm()">등록</button>
             </td>
         </tr>
    </table>
    <script type="text/javascript">
    	gaia3d.guestBook.insertViewDialog = $("#insertView").dialog({
    		autoOpen : false,
    		modal : true,
    		width : 500
    	});
    	
    	gaia3d.guestBook.insert = new Vue({
    		el : "#insertView",
    		data : {
    			insName : "",
    			insPwd : "",
    			insTell : "",
    			insMessage : ""
    		},
    		methods : {
				insertConfirm : function () {
					
					//입력된 데이터 초기화
					$("#insertView td input, textarea").val("");
					var params = {
							"name" : this.insName,
							"pwd" : this.insPwd,
							"tell" : this.insTell,
							"message" : this.insMessage
					}
					$.ajax({
						type : "POST",
						url : "exampleInsert",
						data : params
					}).done(function(data) {
						//등록 화면 닫기
						gaia3d.guestBook.insertViewDialog.dialog("close");
						
						//초기 리스트 조회
	    		    	gaia3d.guestBook.list.search();
	    			});
				}
    		}
    	});
    </script>
    
    <!-- 수정 -->
    <table id="updateView" border="1" title="수정">
         <tr>
             <td>이름</td>
             <td>
             	<input type="text" v-model="updGuestBooks.name" >
             </td>
         </tr>
         <tr>
             <td>비밀번호</td>
             <td>
             	<input type="password" v-model="updGuestBooks.pwd">
             </td>
         </tr>
         <tr>
             <td>연락처</td>
             <td>
             	<input type="text" v-model="updGuestBooks.tell">
             </td>
         </tr>
         <tr>
             <td colspan=4 rowspan="span">
             	<textarea cols=60 rows=5 v-model="updGuestBooks.message"></textarea>
             </td>
         </tr>
         <tr>
             <td colspan=4 align=right>
             	<button v-on:click="updateConfirm(updGuestBooks.no)">수정</button>
             </td>
         </tr>
    </table>
    <script type="text/javascript">
	    gaia3d.guestBook.updateViewDialog = $("#updateView").dialog({
			autoOpen : false,
			modal : true,
			width : 500
		});
	    
	    gaia3d.guestBook.update = new Vue({
	    	el : "#updateView",
	    	data : {
	    		updGuestBooks : {}
	    	},
	    	methods : {
	    		updateInfo : function (data) {

	    			gaia3d.guestBook.pwdChkViewDialog.dialog("close");
	
	    			//조회하려는 데이터 셋팅
	    			this.updGuestBooks = data;
	    		},
	    		updateConfirm : function (no) {
	    			var params = this.updGuestBooks
	    			params.no = no;
	    			params.regDate = new Date();
	    			
	    			$.ajax({
	    				type : "POST",
	    				url : "exampleInsert",
	    				data : params
	    			}).done(function () {
	    				//수정화면 닫기
	    				gaia3d.guestBook.updateViewDialog.dialog("close");
	    				
	    				//상세조회
	    				gaia3d.guestBook.list.detail(params.no);
	    				
	    				//초기 리스트 조회
	    		    	gaia3d.guestBook.list.search();
	    			});
	    		}
	    	}
	    });
    </script>
    
    <!-- 비밀번호 확인 -->
    <table id="pwdChkView" title="비밀번호 확인">
        <tr>
            <td>비밀번호</td>
            <td>
            	<input type="password" v-model="insPwd">
            </td>
            <td>
            	<button v-show="deleteBtn" v-on:click="deleteConfirm(pwdCheckNo, pwdCheckPwd)">삭제</button>
            	<button v-show="updateBtn" v-on:click="updateConfirm(pwdCheckNo, pwdCheckPwd)">수정</button>
            </td>
        </tr>
    </table>
    <script type="text/javascript">
    	gaia3d.guestBook.pwdChkViewDialog = $("#pwdChkView").dialog({
    		autoOpen : false,
    		modal : true,
    		width : 320
    	}); 
    
    	gaia3d.guestBook.pwdCheck = new Vue({
    		el : "#pwdChkView",
    		data : {
    			pwdCheckNo : "",
    			pwdCheckPwd : "",
    			insPwd : "",
    			deleteBtn : false,
    			updateBtn : false,
    		},
    		methods : {
    			deleteConfirm : function (no, pwd) {
    				
    				//입력된 비밀번호 초기화
    				$("#pwdChkView td input").val("");
    				
    				//비밀번호 체크
    				if(pwd !== this.insPwd) {
    					alert("비밀번호 확인 필요");
    					return;
    				}
    				
    				var params = {
    						"no" : no	 
    				}
    				$.ajax({
    					type : "POST",
    					url : "exampleDelete",
    					data : params, 
    				}).done( function() {
	    				//비밀번호 확인 화면 닫기
	    				gaia3d.guestBook.pwdChkViewDialog.dialog("close");
	    				
	    				//초기 리스트 조회
	    		    	gaia3d.guestBook.list.search();
	    			});
    			},
    			updateConfirm : function (no, pwd) {
    				
    				//비밀번호 체크
    				if(pwd !== this.insPwd) {
    					alert("비밀번호 확인 필요");
    					return;
    				}
    				
    				var params = {
    						"no" : no	 
    				}
    				$.ajax({
    					type : "POST",
    					url : "exampleDetail",
    					data : params, 
    				}).done( function(data) {
    					
    					//입력된 비밀번호 초기화
        				$("#pwdChkView td input").val("");
        				
    					//수정화면 창 열기
        				gaia3d.guestBook.updateViewDialog.dialog("open");
	    				
	    				//수정할 데이터 조회
	    		    	gaia3d.guestBook.update.updateInfo(data);
	    			});
    				
    			}
    		}
    	});
    </script>
    
	<!-- 목록조회 -->
	<div id="list">
		<h2>sample page</h2>
		<div class="insertDiv">
			<button v-on:click="insertView()">등록</button>
		</div>
        <table style="width: 500" border="1px">
        	<tr class="subject">
                <th>순번</th>
                <th>작성자</th>
                <th>등록일자</th>
                <th>연락처</th>
                <th>메시지</th>
                <th>비고</th>
            </tr>
            <tbody>
                <tr v-for="(guestbook, index) in guestbooks" v-on:click="detail(guestbook.no);" style="cursor:pointer;">
                    <td>{{guestbook.no}}</td>
                    <td>{{guestbook.name}}</td>
                    <td>{{guestbook.regDate}}</td>
                    <td>{{guestbook.tell}}</td>
                    <td>{{guestbook.message}}</td>
                    <td>
                    	<button v-on:click.stop="changeView(guestbook.no, 'update')">수정</button>
                    	<button v-on:click.stop="changeView(guestbook.no, 'delete')">삭제</button>
                    </td>
                </tr>
            </tbody>
        </table>
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
	    			$.post("exampleSearch", null, function(data) {
// 	    				if(data.length > 0){
	    					_this.guestbooks = data;
// 	    				}
	    			}, "json");
	    		},
	    		detail : function (no) {
	    			var params = {
	    					"no" : no
	    			}
    				$.ajax({
    					type : "POST",
    					url : "exampleDetail",
    					data : params
    				}).done(function (data) {
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
    			changeView : function (no, type) {
    				
    				//jquery ui bug로 인해 소스 추가
					$.ui.dialog.overlayInstances = 1;

    				var delBtnType = (type === 'delete') ? true : false;
    				var params = {
	    					"no" : no
	    			}
    				$.ajax({
    					type : "POST",
    					url : "exampleDetail",
    					data : params
    				}).done(function (data) {
    					//비밀번호 확인  값 셋팅
    					gaia3d.guestBook.pwdCheck.deleteBtn = delBtnType;
    					gaia3d.guestBook.pwdCheck.updateBtn = !delBtnType;
    					gaia3d.guestBook.pwdCheck.pwdCheckNo = data.no;
    					gaia3d.guestBook.pwdCheck.pwdCheckPwd = data.pwd;
    					
    		    		//비멀번호 확인 화면 다이얼로그 창 열기
    					gaia3d.guestBook.pwdChkViewDialog.dialog("open");
    		    		
    					//입력된 비밀번호 초기화
    		    		$("#pwdChkView td input").val("");
	    			});
					
    			},
    			insertView : function () {
    				//입력된 데이터 초기화
					$("#insertView td input, textarea").val("");
    				
    				//등록화면 다이얼로그 창 열기
    				gaia3d.guestBook.insertViewDialog.dialog("open");
    			}
    		}
    	});
    	
    	//초기 리스트 조회
    	gaia3d.guestBook.list.search();
    </script>
	
</body>
</html>