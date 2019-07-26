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
    <form action="<c:url value="/delete"/>?no=${param.no}" method="post">
        <table>
            <tr>
                <td>비밀번호</td>
                <td><input type="password" name="pwd"></td>
                <td><input type="submit" value="확인"></td>
            </tr>
        </table>
    </form>
    <a href="<c:url value="/"/>">메인으로 돌아가기</a>
</body>
</html>