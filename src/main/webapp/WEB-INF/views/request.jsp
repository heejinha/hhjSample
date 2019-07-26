<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Time Out</title>
    <script>
        var length = 10;
        var q = new Array(length);
        var head = 0;
        var tail = -1;

        function request() {
            var req = new XMLHttpRequest();

            tail = tail > length - 2 ? 0: tail + 1;
            q[tail] = {req: req, meta: tail};


            req.open('POST', '<c:url value="/timeout"/>', true);
            req.send(null);

            req.onreadystatechange = function (aEvt) {
                if (req.readyState === 4) {
                    if(req.status === 200)
                        console.log(req.responseText);
                    else
                        console.log("Error loading page");
                }
            };
        }

        function remove() {
            var req = q[head];
            req.req.abort();
            head = head > length - 2 ? 0: head + 1;
        }

 /*
        setInterval(() => {
            remove();
        }, 2 * 1000);
*/
    </script>
</head>
<body>
    <h1>Hello World ??</h1>
    <button onclick="request()"> request </button> <button onclick="remove()"> remove </button>
</body>
</html>