<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<%
    pageContext.setAttribute("newLine", "\n");
%>
<body>
    <form action="<c:url value="/"/>" method="post">
        <table border="1" style="width: 500">
            <tr>
                <td>이름</td>
                <td><input type="text" name="name"></td>
                <td>비밀번호</td>
                <td><input type="password" name="pwd"></td>
                <td>전화번호</td>
                <td><input type="text" name="tell"></td>
            </tr>
            <tr>
                <td colspan=6><textarea name="message" cols=90 rows=5></textarea></td>
            </tr>
            <tr>
                <td colspan=6 align=right><input type="submit" VALUE=" 확인 "></td>
            </tr>
        </table>
    </form>
    <br>
    <c:set var="count" value="${fn:length(guestbookList)}" />
    <c:forEach items="${guestbookList }" var="guestbook" varStatus="status">
        <table style="width: 500" border="1">
            <tr>
                <td>[${count - status.index}]</td>

                <td>${guestbook.name }</td>
                
                <td>${guestbook.tell }</td>

                <td>${guestbook.regDate }</td>
                <td><a href="<c:url value="/delete"/>?no=${guestbook.no }">삭제</a></td>
            </tr>
            <tr>
                <!-- 개행(\n)을 JSTL에서 사용할 수 없어서 page context에 다른 변수로 추가해줘야함 -->
                <td colspan="6">${fn:replace(guestbook.message, newLine, "<br>") }</td>
            </tr>
        </table>
        <br>
    </c:forEach>
</body>
</html>