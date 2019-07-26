/**
 * gua.UI Framework using jQuery v2.2.4<br>
 *
 * Copyright 2016, 가이아쓰리디(주)(gua)<br>

 * @namespace
 * @author 이승희
 * @version 1.0
 * @since 2016.03.10
 */
var gua = gua || {};

/**
* gua.UI 공통상수
* @namespace
* @author 이승희, 2016.03.10
* @classDescription gua.UI 공통상수
*/
gua.c = {

  /** 프레임워크 버전 */
  VERSION: "0.9",

  /** GEOSERVER url */
  GEOSERVER_URL: "",

  /** API SERVER URL */
  APISERVER_URL: "",

  /** CONTEXT ROOT */
  CONTEXT_ROOT: "/",

  /** 서버 유형 */
  SERVER_TYPE: "DEV",

  /** 에러페이지 URL 경로 (세션중단) */
  URL_NO_SESSION: undefined,

  /** 토큰값 */
  CSRF_NAME: "",
  CSRF_TOKEN: "",

  /** 웹페이지 기본 인코딩셋 */
  CHAR_SET: "UTF-8",


  /** 각종 ID 모음 */
  ID: {
    LOADING_BAR: "#_gua_LoadingBar",
    WIN_FORM   : "#_gua_winForm",
    WIN_TIP    : "#_gua_tip",
    DEBUG_PANEL: "#_gua_logPanel",
    DEBUG_TXT  : "#_gua_logPanelDesc",
    FILE_DN    : "#_guaDownload"
  },

  // window
  WINDOW: {
    ID_SEQ     : "_autoGenId_"
  },


  /** Date */
  DATE: {
    FORMAT        : "YYYY.MM.DD", // 기본 날짜형식
    SERVER_DATE   : null,
    LOCAL_DATE    : null,
    PICKER_BTN_IMG: "/images/calendar.gif"
  },

  /** 정규식처리 관련 공통상수 (번역 대상에 포함되지 않음) */
  REG_PTTN: {

    TRIM: /(^ *)|( *$)/g,
    LTRIM: /(^ *)/g,
    RTRIM: /( *$)/g,
    INNER_TRIM: / +/g,
    INNER_SPACE: / /g,
    NUM: /[0-9]/g,
    NOT_NUMERIC: /[^0-9\.]/g,
    NOT_NUM: /[^0-9]/g,
    NOT_NUM_PARSE: /[^0-9\.-]/g,
    ENG: /[a-zA-Z]/g,
    NOT_ENG: /[^a-zA-Z]/g,
    KOR: /[ㄱ-ㅎㅏ-ㅣ가-힣]/g,
    NOT_KOR: /[^ㄱ-ㅎㅏ-ㅣ가-힣]/g,
    NOT_NUM_OR_ENG: /[^0-9a-zA-Z]/g,
    MONEY: /(\d)(?=(?:\d{3})+(?!\d))/g,

    HAS_HTML: /<\/?[a-zA-Z][a-zA-Z0-9]*[^<>]*>/,
    IS_NUM: /^[0-9]+$/,
    IS_NOT_NUM: /^[^0-9]+$/,
    IS_NOT_KOR: /^[^ㄱ-ㅎㅏ-ㅣ가-힣]+$/,
    IS_ENG: /^[a-zA-Z]+$/,
    IS_NUM_ENG: /^[0-9a-zA-Z]+$/,
    IS_KOR: /^[ㄱ-ㅎㅏ-ㅣ가-힣]+$/,
    IS_NUM_KOR: /^[0-9ㄱ-ㅎㅏ-ㅣ가-힣]+$/,
    IS_RRN: /^(\d{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])(|\D)[1-4](\d{6})$/,
    IS_FGN: /^(\d{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])(|\D)[5-8](\d{6})$/,
    IS_EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    IS_HOME_PHONE: /^(0[2-8][0-5]?)(|\D)([1-9]{1}[0-9]{2,3})(|\D)([0-9]{4})$/,
    IS_CELL_PHONE1: /^(01[1346-9])(|\D)([1-9]{1}[0-9]{2,3})(|\D)([0-9]{4})$/,
    IS_CELL_PHONE2: /^(010)(|\D)([2-9]{1}[0-9]{3})(|\D)([0-9]{4})$/,

    UNMASK: [ "X", "9", "*" ],

    MASK_CHR_STR: "[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]",
    MASK_NUM_STR: "[0-9]",
    MASK_ALL_STR: ".",

    MASK_CHR: /[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]/,
    MASK_NUM: /[0-9]/,
    MASK_ALL: /./,

    HAN_1ST: ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ' ],
    HAN_2ND: ['ㅏ','ㅐ','ㅑ','ㅒ','ㅓ','ㅔ','ㅕ','ㅖ','ㅗ','ㅘ','ㅙ','ㅚ','ㅛ','ㅜ','ㅝ','ㅞ','ㅟ','ㅠ','ㅡ','ㅢ','ㅣ'],
    HAN_3RD: ['','ㄱ','ㄲ','ㄳ','ㄴ','ㄵ','ㄶ','ㄷ','ㄹ','ㄺ','ㄻ','ㄼ','ㄽ','ㄾ','ㄿ','ㅀ','ㅁ','ㅂ','ㅄ','ㅅ','ㅆ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'],

    HAN_JOSA: ['은','는','이','가','을','를'],

    HAN_JOSA_MERGE_1: /(은\W는\W|는\W은\W)/,
    HAN_JOSA_MERGE_2: /(이\W가\W|가\W이\W)/,
    HAN_JOSA_MERGE_3: /(을\W를\W|를\W을\W)/

  },

  /** logger */
  LOGGER: {
    print : false,
    dialog: true,
    window: {
      width   : 400,
      height  : 200,
      fontSize: 11
    }
  },

  /** AJAX 설정 */
  AJAX: {
    debug   : false,     // 디버깅모드
    method  : "POST",    // GET/POST
    loading : true,      // 기본 로딩바 표시여부
    dataType: "json",    // 데이터 전송타입 (json/jsonp)
    sync    : false,     // 동기전송 여부
    timeout : 600 * 1000 // 조회대기시간 (sec * 1000)
  }

}

/**
* @class gua.loadingBar
* @classDescription 화면에 로딩바를 보여주는 유틸리티 (버튼 차단 역할도 수행한다.)
* @author 이승희 2016.03.10
*/
gua.loadingBar = {

  /**
   * F: 로딩바를 생성한다.
   */
    create: function() {

    if ($(gua.c.ID.LOADING_BAR).length > 0) return;

    $("<div>").attr({
      "id"   : gua.c.ID.LOADING_BAR.replace("#",""),
      "class": gua.c.ID.LOADING_BAR.replace("#","")
    }).appendTo("body").hide();

  },

  /**
   * F: 로딩바를 보여준다.
   */
  show: function() {

    gua.loadingBar.z_showCnt ++;
    if (gua.loadingBar.z_showCnt > 1) return;

    var width  = $(window).width();
    var height = $(window).height();

    $(gua.c.ID.LOADING_BAR).css({
      left  : 0,
      top   : 0,
      width : width,
      height: height,
      cursor: "wait"
    }).show();

  },

  /**
  * F: 로딩바를 감춘다.
  * @author 이승희 2016.03.10
  */
  hide: function() {

    gua.loadingBar.z_showCnt --;

    if (gua.loadingBar.z_showCnt > 0) return;

    $(gua.c.ID.LOADING_BAR).hide();

  }

}

gua.loadingBar.z_showCnt = 0;

/**
*  gua - UI 서버호출모듈
* @class gua.req
* @classDescription gua - UI 서버호출모듈
* @author 이승희, 2016.03.10
*/
gua.req = {};
gua.req.z_ajax = {};

/**
 *  동기호출시 호출에러 여부가 저장되는 장소
 * @return {Boolean}
 */
gua.req.err = false;

/**
* F: 파라미터를 추가한다.
* @param {String} key 키
* @param {String} value 값
*/
gua.req.addParam = function (key, value) {
  gua.req.z_req.add(key, value);
}

/**
* F: 개체를 파라미터를 추가한다.
* @param {Object} data
*        {key1: "va1",  key2: "va2"} 단순 key/value 이며 value에는 객체(object, array)는 사용할수 없음
*/
gua.req.addData = function (data) {
  gua.req.z_req.addData(data);
}

/**
* F: FORM 파라미터를 추가한다.
* @param {String} expression  셀럭터
*/
gua.req.addForm = function (expression) {
  gua.req.z_req.addForm(expression);
}

/**
 * F: 세팅한 파라미터를 초기화한다.
 */
gua.req.clearParam = function() {
  gua.req.z_req.clear();
}


/**
 * F: 서버와 통신이 성공했을 경우 수행한다.
 * @param {Object} res 결과값이 담겨있는 JSON 오브젝트 (data,meta)
 * @param {Object} options 옵션
 * @private
 */
gua.req.z_ajax.onComplete = function (res, options) {

  if (options.loading == true) gua.loadingBar.hide();

  var callFlag = true;
  switch(res.meta.errCd) {
    case "100": // EgovBizException
      if (options.alert) {
          gua.msg.alert(res.meta.msg);
      }
      break;
    case "300": // UnknownException
      if (options.alert) {
          gua.msg.alert("처리 도중 에러가 발생하였습니다. 관리자에게 문의하시기 바랍니다.");
      } // end if
      break;
    case "900": // InvalidSessionException
      gua.msg.alert("로그인이 필요합니다.");
      if (gua.chk.isTypFn(gua.c.URL_NO_SESSION)) {
          gua.c.URL_NO_SESSION.call(this);
      } else {
          gua.window.openPage("", {method: 2, option: "GET"});
      }
      /*
      if (!gua.chk.isEmpty(gua.c.CONTEXT_ROOT)) {
          gua.window.openPage(gua.c.URL_NO_SESSION.url, {method: 2, option: "GET"});
      }
      callFlag = false;
      */
      break;
    default:    // Success
      if (res.meta.msg != "" && options.alert == true) {
          gua.msg.alert(res.meta.msg);
      }
      break;
  }

  // 동기방식일 경우 결과값을 전역변수에 세팅
  if (options.sync == true) {
    gua.req.meta = res.meta;
    gua.req.data = res.data;
    gua.req.err  = (res.meta.err == "true");
  }

  // 후처리함수가 세팅되었다면 이를 실행
  if (gua.chk.isTypFn(options.func) && callFlag) {
      options.func(res.data, (res.meta.err == "true"), res.meta);
  }

  // 중복실행방지를 위해 해제한 focus 원위치
  if (options.focus == true && options.focusId != "") {
      $("#"+options.focusId).focus();
  }
}

/**
 * F: 서버와 통신 자체를 실패했을 경우 실행된다.
 * @param {Object} xhr
 * @private
 */
gua.req.z_ajax.onError = function (xhr, options) {

  if (options.loading == true) gua.loadingBar.hide();

  // 동기방식일 경우 결과값을 전역변수에 세팅
  if (options.sync == true) {
    gua.req.data = {};
    gua.req.err  = true;
  }

  var errMsg = "";
  var header = xhr.getAllResponseHeaders();
  if (header == null) header = "\n";
  errMsg += gua.msg.get("api.xhr.errTitle");
  errMsg += "----------------------------------------------\n";
  switch(xhr.status) {
    case 200: errMsg += gua.msg.get("api.xhr.err200"); break;
    case 401: errMsg += gua.msg.get("api.xhr.err401"); break;
    case 403: errMsg += gua.msg.get("api.xhr.err403"); break;
    case 404: errMsg += gua.msg.get("api.xhr.err404"); break;
    case 0  : errMsg += gua.msg.get("api.xhr.err000"); break;
  }
  errMsg += "----------------------------------------------\n";
  errMsg += ">> Status: " + xhr.status + "\n";
  errMsg += ">> ReadyState: " + xhr.readyState + "\n";
  errMsg += "----------------------------------------------\n";
  gua.msg.alert(errMsg);

  if (xhr.status === 401) {
      if (gua.chk.isTypFn(gua.c.URL_NO_SESSION)) {
          gua.c.URL_NO_SESSION.call(this);
      } else {
          gua.window.openPage("", {method: 2, option: "GET"});
      }
  }
  // 중복실행방지를 위해 해제한 focus 원위치
  if (options.focus == true && options.focusId != "") $("#"+options.focusId).focus();

}

/**
* F: 서버에 요청을 날린다.
* <pre>
* gua.req.z_ajax.send("/test/test/Test.do", {method:'GET', async:true, loading:false});
* </pre>
* @private
* @param    {String}  url     호출URL
* @param    {Object}  options 옵션
* <pre>
* domain : {String}   URL의 메인도메인 (기본값: rootContext, 외부링크로 전송하고 싶을 경우 해당 항목을 변경한다.)
* func   : {Function} 비동기 방식일 때 호출할 CallBack 함수 (기본값:null)
* sync   : {Boolean}  동기방식 호출여부 (기본값:false)
* dataType: {String}  데이터 전송타입 (json/jsonp), 기본값(json)
* method : {String}   전송형식 (POST/GET), (기본값:POST)
* timeout: {Number}   호출 대기시간 (기본값: gua.c.AJAX.timeout 설정값)
* loading: {Boolean}  로딩바 표시여부 (기본값:true)
* alert  : {Boolean}  서버에서 보내주는 메세지 표시여부 (기본값:true)
* focus  : {Boolean}  송신 후 버튼 Focus 복원 (기본값:true)
* </pre>
* @author Hwasu, 2016.03.10
*/
gua.req.z_ajax.send = function (url, options) {

  var op = $.extend({
    domain  : gua.c.CONTEXT_ROOT,
    func    : null,
    method  : gua.c.AJAX.method,
    dataType: gua.c.AJAX.dataType,
    sync    : gua.c.AJAX.sync,
    loading : gua.c.AJAX.loading,
    alert   : true,
    timeout : gua.c.AJAX.timeout,
    focus   : gua.c.AJAX.focus,
    focusId : gua.window.getFocusId()
  }, options || {});

  if (op.loading == true) gua.loadingBar.show();

  // add user param
  if (gua.c.CSRF_NAME !== "") {
      gua.req.z_req.add(gua.c.CSRF_NAME, gua.c.CSRF_TOKEN);
  }

  // compatible for 1.3
  // jQuery.ajaxSettings.traditional = true;

  // var reqData = gua.req.z_req.z_data;
  var reqData = gua.req.z_req.query();
  // hide cursor focus
  //  gua.msg.debug(gua.req.z_req.query());
  $(op.focusId).blur();


  // call ajax
  $.ajax({
    url     : op.domain + url,
    type    : op.method,
    data    : reqData,
    dataType: op.dataType,
    timeout : op.timeout,
    async   : !op.sync,
    success : function(data) { gua.req.z_ajax.onComplete(data,op); },
    error   : function(xhr) { gua.req.z_ajax.onError(xhr,op) }
  });

  // clear request param
  gua.req.z_req.clear();

  // return result when SJAX called
  if (op.sync == true) return gua.req.data;

}

/**
* F: 서버에 요청을 날린다.
* <pre>
* gua.req.send("/test/test/Test.do", fnCallBack, {method:'GET', async:true, loading:false});
* gua.req.send("/test/test/Test.do", function (data, err) {
*   if (err) return;
*   if (data == null || data.someResult == null) return;
* });
* </pre>
* @param  {String}   url     호출URL
* @param  {Function} fn      후처리함수 (Ajax 호출 후 실행됨)
* <pre>
* 1. function fnCallBack(결과데이터, 에러여부) {} 형식을 취해야 함
* 2. 서버의 CMD 클래스에서 Output.addParam("keyName1", 데이터); 로 세팅한 값은
*    결과데이터.keyName1 에 담겨 들어온다.
* 3. 에러여부 변수의 true/false 비교로 에러 여부를 확인할 수 있다.
* </pre>
* @param  {Object}   options 옵션
* <pre>
* domain : {String}   URL의 메인도메인 (기본값: rootContext, 외부링크로 전송하고 싶을 경우 해당 항목을 변경한다.)
* func   : {Function} 비동기 방식일 때 호출할 CallBack 함수 (기본값:null)
* sync   : {Boolean}  동기방식 호출여부 (기본값:false)
* method : {String}   전송형식 (POST/GET), (기본값:POST)
* loading: {Boolean}  로딩바 표시여부 (기본값:true)
* alert  : {Boolean}  서버에서 보내주는 메세지 표시여부 (기본값:true)
* timeout: {Number}   호출 대기시간 (기본값: gua.c.AJAX.timeout 설정값)
* focus  : {Boolean}  송신 후 버튼 Focus 복원 (기본값:true)
* </pre>
* @return {Object} 동기방식 호출시 {} 형태로 결과값 리턴
* @author Hwasu, 2016.03.10
*/
gua.req.send = function (url, fn, options) {

  if (gua.str(url).isEmpty()) return false;

  if (gua.chk.isTypFn(fn)) {
    var options = options || {};
    options.func = fn;
  } else {
    var options = fn || {};
  }

  var sendType = url.replace(/^.*\./, "");


  return gua.req.z_ajax.send(url, options);

}


/**
*  메세지 처리 유틸리티
* @class gua.msg
* @classDescription 메세지 처리 유틸리티
* @author 이승희 (2016.03.10)
*/
gua.msg = {};

gua.msg.z_p = {
  msgPool  : [],
  debugPool: []
}

/**
* F: 메세지코드에 해당하는 문자열을 출력한다.
* <pre>
*   gua.msg.alert("기상청 프로젝트");
*   gua.msg.alert("@는 죽어납니다.", "이승희");
*   gua.msg.alert("err.info.001", "hudson", "kaf");
* </pre>
* @param  {String}    msgCd       메세지코드 또는 출력할 메세지
* @param  {Argument}  replaceStr  메세지에서 '@' 문자와 치환될 문자배열
* @author 이승희. 2016.03.10
*/
gua.msg.alert = function (msgCd) {
  alert(gua.msg.get(arguments));
}

/**
* F: 문자열을 confirm box로 보여준 후 사용자의 선택결과를 반환한다.
* <pre>
*   if (gua.msg.confirm("ok??")) processY(); else processN();
* </pre>
* @param  {String}    msgCd       메세지코드 또는 출력할 메세지
* @param  {Argument}  param       메세지에서 '@' 문자와 치환될 문자배열
* @return {Boolean}   true(Y)/false(N)
*/
gua.msg.confirm = function (msgCd) {
  return confirm(gua.msg.get(arguments));
}

/**
* F: 문자열을 prompt로 보여준 후 사용자의 입력결과를 반환한다.
* <pre>
*   var name = gua.msg.prompt("이름을 입력하세요.", name);
* </pre>
* @param  {String}    msgCd       메세지코드 또는 출력할 메세지
* @param  {Argument}  param       메세지에서 '@' 문자와 치환될 문자배열
*/
gua.msg.prompt = function (msgCd) {
  return prompt(gua.msg.get(arguments[0]), arguments[1]);
}

/**
 * F: 로그를 출력한다.
 * @param {String} message 출력할 메세지
 */
gua.msg.debug = function (message) {

  if (!gua.c.LOGGER.print) return;

  try{
    console.log(gua.chk.isTypObj(message) ? message: gua.msg.get(arguments));
  } catch(e) {}

  if (! gua.c.LOGGER.dialog) return;
  var msg = gua.chk.isTypObj(message) ? message: gua.msg.get(arguments);
  msg = "<p>" + gua.date().toString("[HH:MI:SS]") + " " + gua.str(msg).clearXss().val() + "</p>";

  if (!gua.msg.z_p.makeDebugger(msg)) return;

  $(gua.c.ID.DEBUG_TXT).append(msg).scrollTop(65535);
  $(gua.c.ID.DEBUG_PANEL).css("z-index", 65535);

}

/**
* F: '@' 문자에 해당하는 메세지를 치환해서 반환한다.
* <pre>
* gua.msg.get('@_@_TEST', 'hyshin', 'nuna'); -> 반환할 문자는 'hyshin_nuna_TEST'
* gua.msg.get('com.alt.001'); -> 'com.alt.001' 코드에 해당하는 문자를 반환 (코드는 서버와 동일)
* </pre>
* @param  {String}    inputMsg  출력할 메세지
* @param  {Argument}  param     메세지에서 '@' 문자와 치환될 문자열
* @return {String}  반환할 메세지
* @author 이승희(2016.03.10)
*/
gua.msg.get = function (inputMsg) {

  var args;
  if (gua.chk.isTypObj(arguments[0])) {
      args = arguments[0];
  } else {
      args = arguments;
  }

  var argLen = args.length;

  if (argLen == 0) return '';

  var code = args[0] + "";

  var msg = gua.msg.z_p.msgPool[ code ];
  if (msg == null) msg = code;

  if (argLen == 1) return msg;

  // bind @ to Input String (array)
  var idx = 0;

  for(var i = 1; i < argLen; i++) {
      var re = "{"+ (i - 1) + "}";
      idx = msg.indexOf(re, idx);
      if (idx < 0) continue;

      var param = gua.str(args[i]);
      var msgAfter = msg.substring(idx + re.length);

      // 한글문자일 경우 은/는/이/가 처리
      var charKr = param.getLastKr();
      if (charKr[0] != null) {
      msgAfter = msgAfter.substring(0, 4)
        .replace(gua.c.REG_PTTN.HAN_JOSA_MERGE_1, gua.c.REG_PTTN.HAN_JOSA[0])
        .replace(gua.c.REG_PTTN.HAN_JOSA_MERGE_2, gua.c.REG_PTTN.HAN_JOSA[2])
        .replace(gua.c.REG_PTTN.HAN_JOSA_MERGE_3, gua.c.REG_PTTN.HAN_JOSA[4])
        + msgAfter.substring(4);

      var josa = msgAfter.charAt(0);
      var which;

      $.each(gua.c.REG_PTTN.HAN_JOSA, function(n) {

        if (josa != this) return true;

        which = n;
        return false;

      });

      switch(which) {

        case 0: case 1 :
          which = (charKr[2] != "") ? 0: 1; break;
        case 2: case 3 :
          which = (charKr[2] != "") ? 2: 3; break;
        case 4: case 5 :
          which = (charKr[2] != "") ? 4: 5; break;

      }

      if (which != undefined) msgAfter = gua.c.REG_PTTN.HAN_JOSA[which] + msgAfter.substring(1);

    }

    msg = msg.substr(0, idx) + param.val() + msgAfter;
    idx = idx + param.length;
  }

  return msg;

}

/**
 * F: 디버그용 창을 만든다.
 * @private
 */
gua.msg.z_p.makeDebugger = function (message) {

  // 패널 생성가능 여부를 확인한다.
  if (!$.isReady) {
    gua.msg.z_p.debugPool.push(message);
    setTimeout(arguments.callee, 50);
    return false;
  }

  if ($(gua.c.ID.DEBUG_PANEL).length == 1) {
    $(gua.c.ID.DEBUG_PANEL).show();
    return true;
  }

  // 화면 위치를 조정한다.
  var mL   = gua.c.LOGGER.window.width - 200;
  var top  = $(window).height() - gua.c.LOGGER.window.height - 10;
  var left = $(window).width()  - gua.c.LOGGER.window.width  - 20;

  if (mL   < 0) ml   = 10;
  if (top  < 0) top  = 0;
  if (left < 0) left = 0;

  var id = gua.c.ID.DEBUG_PANEL.replace("#","");
  var titleHeight = 15;

  // 디버그 패널을 생성한다.
  $("<div>").attr("id", id).css({
    "position"  : "fixed",
    "font-size" : gua.c.LOGGER.window.fontSize,
    "color"     : "#FFFFFF",
    "background": "#000000",
    "border"    : "1px solid",
    "opacity"   : "0.7",
    "width"     : gua.c.LOGGER.window.width,
    "height"    : gua.c.LOGGER.window.height,
    "white-space": "nowrap",
    "top"       : top,
    "left"      : left
  }).append(
    $("<div>").attr("id", id + "Handler").css("cursor", "move").css("height", titleHeight + "px")
      .append("<span style='font-weight:bold;text-decoration:underline;'>gua - UI Logger</span>")
      .append("<a href='javascript:;' onclick='gua.msg.z_p.clearDebugger();' style='color:#FAEB78;position:absolute; right: 65px;'>clear</a>")
      .append("<a href='javascript:;' onclick='gua.msg.z_p.closeDeubgger();' style='color:#FAEB78;position:absolute; right: 25px;'>close</a>")
      .append("<a href='javascript:;' onclick='gua.c.LOGGER.dialog = false;gua.msg.z_p.closeDeubgger();' style='color:#FAEB78;position:absolute;right: 5px'>X</a>")
 ).append(
    $("<div>").attr("id", id + "Desc")
      .css({
        "overflow": "auto",
        "height"  : gua.c.LOGGER.window.height - titleHeight,
        "line-height": "10px",
        "color": "#FFFFFF"
      })
 ).draggable({handle:"#"+id+"Handler"}).resizable({resize: function( event, ui) {$('#' + id + "Desc").height((ui.size.height - titleHeight));}}).appendTo("body").show();

  // 미출력 메세지 출력
  $.each(gua.msg.z_p.debugPool || {}, function() {
    $(gua.c.ID.DEBUG_TXT).append(this.toString());
  });

  gua.msg.z_p.debugPool = null;

  return true;

}

/**
 * F: 로그 창의 내용을 모두 지운다.
 */
gua.msg.z_p.clearDebugger = function() {
  $(gua.c.ID.DEBUG_TXT).html("");
  try{ console.clear(); } catch(e) {}
}

/**
 * F: 로그 창을 숨긴다.
 */
gua.msg.z_p.closeDeubgger = function() {
  $(gua.c.ID.DEBUG_PANEL).hide();
}


/**
 * @class gua.etc
 *  기타 유틸리티
 * @classDescription 기타 유틸리티
 * @author 이승희, 2016.03.10
 */
gua.etc = {



  /**
   * 특정 KEY에 해당하는 일련번호를 채번한다.
   *
   * <pre>
   * gua.etc.getSequence("key"); -> key_0
   * gua.etc.getSequence("key"); -> key_1
   * </pre>
   *
   * @param {String} key 일련번호를 채번하기 위한 기준 KEY
   * @return {String} 일련번호 (key + 채번된 숫자)
   */
  getSequence: function (key) {

    if (gua.chk.isEmpty(key)) throw new gua.etc.exception("There is no key to create sequence.");

    if (gua.chk.isNull(gua.etc.z_seq[key])) {
      gua.etc.z_seq[key] = 0;
    } else {
      gua.etc.z_seq[key] ++;
    }

    return key + "_" +  gua.etc.z_seq_base + "_" + gua.etc.z_seq[key];

  },


  serialize: function(obj) {
      var result = "";
        if (obj instanceof  Array) {
             result = "[";
            for (var i = 0; i < obj.length; i ++) {
                result = result + (i == 0 ? "": ", ") + gua.etc.serialize(obj[i]);
            } // end for
            result = result + "]";
        } else if (obj instanceof  Object) {
            result = "{";
            var i = 0;
            for (key in obj) {
                result = result + (i == 0 ? "": ", ") + "\""+ key + "\": " + gua.etc.serialize(obj[key]);
                i ++;
            } // end for
            result =  result + "}";
        } else {
            if (typeof(obj) ===  "string") {
                result = "\"" + obj + "\"";
            } else {
                result = obj;
            }
        }
        return result;
  },

  objectToQueryString: function objectToQueryString(pre, obj) {
        var result = "";
        if (obj instanceof  Array) {
            for (var i = 0; i < obj.length; i ++) {
                var text = pre + "[" + i + "]";
                result = result + objectToQueryString(text, obj[i]);
            } // end for
        } else if (obj instanceof  Object) {
            var i = 0;
            for (key in obj) {
                var text = pre + (pre == "" ?  "" : ".") + key;
                result = result + objectToQueryString(text, obj[key]);
            } // end for
        } else {
            var text = pre + "=" + obj + "&";
            result = result  + text;;
            // gua.msg.debug(text);
        }
        return result;
    },

    /**
     * UUID 생성
     * @return {String}
     */
    getUUID: function () {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c=='x' ? r : (r&0x7|0x8)).toString(16);
        });
        return uuid;
   }
};


gua.etc.z_seq = [];
gua.etc.z_seq_base = new Date() - 0;


/**
 *  윈도우 창 컨트롤에 관련된 유틸리티 클래스
 * @class gua.window
 * @classDescription 윈도우 창 컨트롤에 관련된 유틸리티 클래스
 * @author 이승희, 2016.03.10
 */
gua.window = {

  /**
  * F: 팝업을 호출한다.<br>
  * <pre>
  * var popup = gua.window.openPopup("", 200, 300);
  *
  * 1. 팝업창의 입력상자에 접근해 값을 변경
  * $("#inputPopup", popup.document).val("merong");
  * $(popup.document).find("#inputPopup").val("merong");
  *
  * 2. 팝업창의 스크립트를 실행
  * $(popup)[0].fnPopupScript();
  *
  * 3. 팝업창에서 부모창에 접근해 값을 변경
  * $("#inputOpner", opner.document).val("merong");
  * </pre>
  *
  * @param {String} url    호출할 페이지
  * @param {Number} width  창 너비
  * @param {Number} height 창 높이
  * @param {Object} option 옵션
  * <pre>
  * scrollbars : {Boolean} 스크롤바 생성여부 (기본값: false)
  * status     : {Boolean} 상태바 생성여부 (기본값: false)
  * toolbar    : {Boolean} 툴바 생성여부 (기본값: false)
  * copyhistory: {Boolean} ? (기본값: false)
  * menubar    : {Boolean} 메뉴바 생성여부 (기본값: false)
  * location   : {Boolean} 주소입력창 생성여부 (기본값: false)
  * directories: {Boolean} ? (기본값: false)
  * method     : {String}  팝업화면에 데이터를 보내는 방법 (post (기본값) / get)
  * domain     : {String}  URL의 메인도메인 (외부링크를 열고 싶을 경우 해당 항목을 "" 처리한 후 full-URL을 입력한다.)
  * </pre>
  * @exception 팝업차단으로 창이 열리지 않을 때
  * @author 이승희, 2016.03.10
  * @return {Object} 팝업윈도우 핸들러 (팝업이 차단되어 있으면 null을 반환)
  */
  openPopup: function (url, width, height, option) {

    if (gua.chk.isEmpty(url)) return;

    var op = $.extend({
      scrollbars : false,
      status     : false,
      resizable  : true, // 크기조절을 막는 기능은 IE에서만 된다.
      toolbar    : false,
      copyhistory: false,
      menubar    : false,
      location   : false,
      directories: false,
      method     : "post",
      domain     : gua.c.CONTEXT_ROOT
    }, option || {});

    op.innerWidth  = Number(width );
    op.innerHeight = Number(height);

    op.width  = op.innerWidth + 8;
    op.height = op.innerHeight;

    var curPos = gua.window.getPosition();

    op.top  = curPos.top  + ((curPos.innerHeight/2) - (op.innerHeight/2));
    op.left = curPos.left + ((curPos.innerWidth /2) - (op.innerWidth /2));

    if (op.scrollbars == true) {
      op.width += 25;
    }

    var param = "";
    var temp = "";
    for(var c in op) {
      if (c == "domain") continue;
      switch(op[c]) {
        case true : temp = "yes"; break;
        case false: temp = "no";  break;
        default   : temp = op[c];
      }
      param += (c + "=" + temp + ",");
    }
    param = param.replace(/,$/, "");

    var id = gua.etc.getSequence("openPopup")

    var popup = window.open("", id, param);

    if (gua.window.isPopupBlocked(popup)) {
      // 팝업이 차단되어 있다면 에러 표시
      gua.msg.alert("gua.api.window.err001");
      throw new gua.etc.exception("gua.api.window.err001");

    } else {
      if(op.method=="post"){
        var form = gua.window.getForm(gua.window.z_req);
        form.attr({
          "method": "post",
          "target": id,
          "action": op.domain + url
        }).submit();
        gua.window.clearParam();
      }else{
        popup.location.href = op.domain + url;
      }
    }

    return popup;

  },

  /**
  * F: 현재 화면에 페이지를 연다. (페이지를 이동한다.)
  *
  * @param {String} url  페이지 주소
  * @param {Object} option 옵션
  * <pre>
  * method : {Number} 1.새 탭에 페이지 로딩, 2.현재 창에 페이지 로딩, 3.리로딩
  * target : {String} 페이지가 전송될 타겟윈도우ID
  * domain : {String} URL의 메인도메인 (외부링크를 열고 싶을 경우 해당 항목을 "" 처리한다.)
  * option : {String} 데이터를 보내는 방법 (POST (기본값) / GET)
  * </pre>
  * @exception 팝업차단으로 창이 열리지 않을 때
  * @author 이승희, 2016.03.10
  */
  openPage: function (url, option) {

    // if (gua.chk.isEmpty(url)) return;

    var op = $.extend({
      method : 1,
      domain : gua.c.CONTEXT_ROOT,
      option: "post"
    }, option || {});

    switch(op.method) {
      case 1: // new tab

        var id = gua.etc.getSequence("openPage");
        var newTab = window.open("", id);

        // 팝업이 차단되어 있다면 에러 표시
        if (gua.window.isPopupBlocked(newTab)) {
          gua.msg.alert("gua.api.window.err001");

          gua.msg.debug(">> newTab.location: " + newTab.location);

          throw new gua.etc.exception("gua.api.window.err001");

        } else {
          var form = gua.window.getForm(gua.window.z_req);
          form.attr({
            "method": op.option,
            "target": id,
            "action": op.domain + url
          }).submit();
        }
        break;
      case 2: // self
        var form = gua.window.getForm(gua.window.z_req);
        form.attr({
          "method": op.option,
          "target": "_self",
          "action": op.domain + url
        }).submit();
        break;

      case 3:  // reload
        document.location.reload();
        break;
    }

    gua.window.clearParam();

  },

  /**
   * 현재 윈도우 창을 닫는다.
   *
   * <pre>
   * firefox에서는 설정때문에 자동으로 닫기지 않을 수 있다.
   * about:config 에서
   * dom.allow_scripts_to_close_windows 항목이 true 인지를 검사해 보아야 한다.
   * </pre>
   */
  close: function() {

    if (gua.detect.isIE || gua.detect.isChrome) {
      window.open('about:blank','_self').close();

    } else if (gua.detect.isFireFox) {
      window.self.close();

    } else {
      window.self.close();
    }

  },

  /**
  * F: 화면에 넘겨주기 위한 파라미터를 추가한다.
  * @param {String} key 키
  * @param {String} value 값
  */
  addParam: function (key, value) {
    gua.window.z_req.add(key, value);
  },

  /**
  * F: 화면에 넘겨주기 위한 FORM 파라미터를 추가한다.
  * @param {String} selector  셀럭터
  */
  addForm: function (selector) {
   gua.window.z_req.addForm(selector);
  },

  /**
   * F: 세팅한 파라미터를 초기화한다.
   */
  clearParam: function() {
    gua.window.z_req.clear();
  },

  /**
  * F: 기존에 있는 값을 지우고 파라메터로 대체
  * @param {Object} data
  * {key1: "va1",  key2: {key21: "va21", key22: "va21"}, key3: ["va31", "va32", {key331: "va331",key332: "va332"} ]}
  */
  setData: function (data) {
    gua.window.z_req.setData(data);
  },

  /**
  * F: 데이터 전송을 위한 form 객체를 가져온다.
  * @param {gua.mdata} mdata  form에 담을 데이터
  * @author 이승희, 2016..3.21
  * gua.c.CSRF_NAME = "_csrf";
  * gua.c.CSRF_TOKEN = "70664a89-ce1f-4195-960b-d87b1f381ac4";
  */
  getForm: function (mdata) {

    // 폼을 가져온다. (없으면 하나 만든다.)
    var form = $(gua.c.ID.WIN_FORM);
    if (form.length == 0) {
      form = $("<form>").attr({
        id: gua.c.ID.WIN_FORM.replace("#",""),
        "accept-charset": gua.window.getCharset()
      }).appendTo("body");
    }

    // 폼 데이터를 초기화시킨다.
    form.children().remove();

    // 데이터가 없다면 메서드를 종료한다.
    if (gua.chk.isNull(mdata)) return form;

    if (gua.c.CSRF_NAME != "") {
        // TOKEN 데이터 추가
        $("<input>").attr({
            type : "hidden",
            name : gua.c.CSRF_NAME,
            value: gua.c.CSRF_TOKEN
        }).appendTo(form);
    }

    function makeInput(pre, obj, form) {
        if (obj instanceof  Array) {
            for (var i = 0; i < obj.length; i ++) {
                 var text = pre + "[" + i + "]";
                 makeInput(text, obj[i], form);
            } // end for
        } else if (obj instanceof  Object) {
            var i = 0;
            for (key in obj) {
                var text = pre + (pre == "" ?  "" : ".") + key;
                makeInput(text, obj[key], form);
            } // end for
        } else {
            // gua.msg.debug(pre + "=" + obj);
            $("<input>").attr({
                type : "hidden",
                name :pre,
                value: obj
            }).appendTo(form);
        }
    }
    makeInput("", mdata.z_data, form);
    return form;

  },


  /**
   * F: 화면에 부여할 ID를 구한다.<br>
   * ID는 한 화면에서 순차적으로 부여된다.
   * @param {Object} obj
   */
  getId: function (obj) {

    if ($(obj).length == 0) return "";

    var id = $(obj).prop("id");

    if (id == "") {

      gua.window.z_idSeq ++;

      id = gua.c.WINDOW.ID_SEQ + gua.window.z_idSeq;

      $(obj).prop("id", id);
    }

    return id;

  },

  /**
   * F: 화면 URL을 가져온다.
   */
  getUrl: function() {
    return window.location.href;
  },

  /**
   * F: 화면 URL을 파라미터 정보를 포함하여 다시 세팅한다.
   * @param {gua.data} param
   */
  setUrlParam: function (param) {
    parent.location.hash = param.serialize();
  },

  /**
   * F: GET 방식으로 날아온 URL 주소로부터 파라미터 정보를 추출한다.
   *
   * @return {gua.data} 파라미터 정보 (없으면 null을 반환)
   */
  getUrlParam: function() {

    var url = this.getUrl();

    var idx = url.indexOf("?");

    if (idx < 0) {
      idx = url.indexOf("#");
      if (idx < 0) return null;
    }

    url = url.substr(idx + 1).replace("#", "&");

    var result = gua.data();
    var params = url.split("&");

    for(var i = params.length - 1; i >= 0; i--) {

      var p = gua.str(params[i]).split("=");

      result.add(p[0], p[1] || "");

    }

    return result;

  },

  /**
   * F: 현재 창이 팝업으로 열렸는지 확인한다.
   * @return {Boolean}
   * @author 이승희, 2016.03.10
   */
  isPopup: function() {
    return (opener != null && opener.document != null);
  },

  /**
   * F: 현재 창의 문자셋을 가져온다.
   * @return {String} 문자셋(대문자)
   * @author 이승희, 2016.03.10
   */
  getCharset: function() {
    return (document.charset || document.characterSet || document.defaultCharset || gua.c.CHAR_SET).toUpperCase();
  },

  /**
   * F: 현재 포커스된 개체의 ID 를 구한다.
   * @return {String} focus 개체의 ID (focus가 BODY에 있을 경우 "" 을 리턴)
   */
  getFocusId: function() {

    //if ($(document.activeElement).prop("tagName") == "BODY") return "";
    var active;
    try {
        active = document.activeElement;
    } catch(e) {
        active = document.body;
    }

    return gua.window.getId(active);

  },


  /**
   * F: 윈도우의 타이틀 속성을 가져오거나 세팅한다.
   *
   * <pre>
   * gua.window.title("Merong"); -> 윈도우 창의 타이틀이 'Merong' 으로 바뀐다.
   * gua.window.titie(); -> 세팅된 윈도우 창의 타이틀 내용을 가져온다.
   * </pre>
   *
   * @param {String} string
   * @return {String} 윈도우의 title 내용
   */
  title: function (string) {

    if (gua.chk.isNull(string)) return $(document).prop('title');
    $(document).prop('title', string);

  },

  /**
   * F: 버튼의 활성화 상태를 세팅한다.
   *
   * <pre>
   * gua.window.enableBtn('#btnSave',true ); -> id가 'btnSave'인 버튼을 활성화 시킨다.
   * gua.window.enableBtn('#btnSave',false); -> id가 'btnSave'인 버튼을 비활성화 시킨다.
   * </pre>
   *
   * @param {String} selector 셀렉터
   * @param {Boolean} enableYn 활성화 여부
   */
  enableBtn: function (selector, enableYn) {

    if (enableYn == true) {
      $(selector).removeProp("disabled");

    } else {
      $(selector).prop("disabled", "true");
    }

  },

  /**
   * 브라우저 창의 속성정보를 가져온다.
   *
   * <pre>
   * 1. IE 계열은 width, heigth 정보가 정확하지 않는다.
   * </pre>
   *
   * @return {Object} 속성정보 {top,left,width,height,innerWidth,innerHeight}
   */
  getPosition: function() {
    var result = {};
    result.top         = window.screenY;
    result.left        = window.screenX;
    result.width       = window.outerWidth;
    result.height      = window.outerHeight;
    result.innerWidth  = window.innerWidth;
    result.innerHeight = window.innerHeight;
    return result;
  },

  /**
   * 팝업창이 차단되었는지 여부를 확인한다.
   *
   * <pre>
   * var newTab = gua.window.openPopup("http://...", "popupWindowId");
   *
   * gua.window.isPopupBlocked(newTab); -> 팝업창 차단여부를 돌려줌
   *
   * ※ 구글 크롬에서는 정상적으로 작동하지 않는다.
   * </pre>
   *
   * @param {Object} popupWindow
   * @return {Boolean} 팝업창 차단여부
   */
  isPopupBlocked: function (popupWindow) {

    if (!popupWindow|| popupWindow.closed || typeof popupWindow.closed=='undefined') return true;

    return false;

  }
}

gua.window.z_idSeq = 0;          // 오브젝트에 부여하는 ID
gua.window.z_req = gua.mdata(); // 화면에 넘겨주는 데이터가 저장되는 공간
gua.window.z_loginPopup = null;  // 로그인 팝업창 핸들러가 저장되는 공간

/**
* F: 날짜처리함수<br>
* @class gua.date
* <pre>
* gua.date().val() -> 서버기준 시간을 초기값으로 가지고 있는 신규 Date객체
* gua.date(new Date(2016,3-1,5)).val() -> Date객체 (2016-03-05)
* gua.date("03-05-2016","MM-DD-YYYY").val() -> Date객체 (2016-03-05)
* </pre>
* @param {String/Date/gua.date} date 날짜
* @param {String} format 입력포맷 (기본값: {@link gua.c.DATE.FORMAT})
* @return {gua.date}
* @classDescription 날짜처리함수
* @author 이승희 2016.03.10
*/
gua.date = function (date, format) {

  var z_self = arguments.callee;

  if(!(this instanceof z_self)) return new z_self(date, format);

  this.z_format = format || gua.c.DATE.FORMAT;

  if (gua.chk.isEmpty(date)) {
    this.val(this.getNow(), this.z_format);
  } else {
    this.val(date, this.z_format);
  }

}

gua.date.prototype = {

  /**
  * F: Date 객체를 가져온다.<br>
  * 처리에 필요한 Date 객체를 세팅할 수도 있다.
  * 잘못된 정보로 Date 객체가 세팅될 경우 null이 저장된다.
  * <pre>
  * gua.date().val() -> Date객체(신규)
  * gua.date().val(new Date(2016,3-1,5)).val() -> Date객체 (2016-03-05)
  * gua.date().val("03-05-2016","MM-DD-YYYY").val() -> Date객체 (2016-03-05)
  * </pre>
  * @param {String | Date} date 날짜
  * @param {String} format 입력포맷 (기본값:YYYY-MM-DD, YYYY,MM,DD,HH,MI,SS조합)
  * @return {Date | gua.date}
  */
  val: function (date, format) {

    if (arguments.length == 0) return this.z_val;

    if (gua.chk.isTypDate(date)) {
      this.z_val = date;
      return this;
    } else if (date instanceof gua.date) {
      this.z_val = date.val();
      return this;
    }

    // get dateArray through format
    var z_dtArr = gua.str(date).getDateArray(format || this.z_format);

    $(z_dtArr).each(function(i){
      if (z_dtArr[i] == null) return true;
      z_dtArr[i] = Number(z_dtArr[i]);
    });

    // calibrate date
    z_dtArr[1] = (z_dtArr[1]==null) ? null: z_dtArr[1] - 1; // 월데이터 보정
    z_dtArr[2] = (z_dtArr[2]==null) ? 1: z_dtArr[2]; // 일데이터 보정

    // create Date object
    var z_date = new Date(z_dtArr[0], z_dtArr[1], z_dtArr[2], z_dtArr[3], z_dtArr[4], z_dtArr[5], 0);

    // check validation
    var z_chk  = [];
    z_chk.push("" + z_date.getFullYear());
    z_chk.push("" + z_date.getMonth());
    z_chk.push("" + z_date.getDate());
    z_chk.push("" + z_date.getHours());
    z_chk.push("" + z_date.getMinutes());
    z_chk.push("" + z_date.getSeconds());

    var z_flag = true;

    $(z_chk).each(function(i){
      if (z_dtArr[i] != null && z_dtArr[i] != z_chk[i]) {
        z_flag = false;
        return false;
      }
    });

    // save result
    this.z_val = (z_flag) ? z_date: null;

    return this;

  },

  /**
   * F: 포맷을 가져오거나 변경한다.
   *
   * <pre>
   *
   * var d = gua.date("2016-01-01");
   *
   * d.format(); -> "YYYY-MM-DD"
   *
   * d.format("YYYYMMDD");
   * d.format(); -> "YYYYMMDD"
   *
   * </pre>
   *
   * @param {Object} format
   * @return {String} 포맷
   */
  format: function (format) {

    if (arguments.length == 0) return this.z_format;
    this.z_format = gua.str(format).val();

  },

  /**
   * F: 날짜를 포맷에 맞게 변환한다.
   * @param {String} format 포맷 (기본값:시간데이터 세팅시 입력한 포맷(미입력시 YYYY-MM-DD), YYYY,MM,DD,HH,MI,SS조합)
   * @return {String} 포맷이 적용된 날짜
   */
  toString: function (format) {

    if (this.z_val == null) return "";

    var z_result = gua.str(format||this.z_format).toUpperCase().val();
    var z_date   = this.z_val;

    return gua.str(z_result).replace("YYYY", z_date.getFullYear())
      .replace("MM", gua.str(z_date.getMonth()+1).lpad(2,"0").val())
      .replace("DD", gua.str(z_date.getDate()  ).lpad(2,"0").val())
      .replace("HH", gua.str(z_date.getHours() ).lpad(2,"0").val())
      .replace("MI", gua.str(z_date.getMinutes()).lpad(2,"0").val())
      .replace("SS", gua.str(z_date.getSeconds()).lpad(2,"0").val()).val();

    return result;

  },

  /**
   * F: 현재시간 추출 관련 환경 초기화
   * @param {String} date YYYYMMDDHHMISS 형식의 문자열
   */
  initNow: function (date) {

    if (gua.chk.isEmpty(date)) {
      gua.c.DATE.SERVER_DATE = new Date();
    } else {
      gua.c.DATE.SERVER_DATE = this.val(date,"YYYYMMDDHHMISS").val();
    }

    gua.c.DATE.LOCAL_DATE = new Date();

  },

  /**
   * F: 현재 시간을 구한다.<br>
   * new Date() 함수는 로컬 PC 의 시간을 구하기 때문에 현재 시간을 구하는 용도로 사용해서는 안된다.
   * @return {Date}
   */
  getNow: function() {

    if (gua.c.DATE.SERVER_DATE == null) this.initNow();

    var gap = new Date() - gua.c.DATE.LOCAL_DATE;
    var now = gua.c.DATE.SERVER_DATE.valueOf() + gap;

    return new Date(now);

  },

  /**
   * F: 년도(4자리)를 구한다.
   *
   * @return {Number} 년도
   */
  getYear : function()  {
    return this.z_val.getFullYear();
  },

  /**
   * F: 월을 구한다.
   *
   * @return {Number} 월 (1-12)
   */
  getMonth: function()  {
    return this.z_val.getMonth() + 1;
  },

  /**
   * F: 일을 구한다.
   *
   * @return {Number} 일
   */
  getDate: function()  {
    return this.z_val.getDate();
  },

  /**
   * F: 시간을 구한다.
   *
   * @return {Number} 시간
   */
  getHour: function() {
    return this.z_val.getHours();
  },

  /**
   * F: 분을 구한다.
   *
   * @return {Number} 분
   */
  getMin: function() {
    return this.z_val.getMinutes();
  },

  /**
   * F: 초를 구한다.
   *
   * @return {Number} 초
   */
  getSec: function() {
    return this.z_val.getSeconds();
  },

  /**
   * F: 요일을 구한다.
   *
   * @return {Number} 요일에 해당하는 숫자 (0:일요일 - 6:토요일)
   */
  getDay  : function()  {
    return this.z_val.getDay();
  },


  /**
   * F: 두 날짜간 차이를 구한다.
   *
   * <pre>
   * var a = gua.date("2016-01-01");
   * var b = gua.date("2016-01-03");
   * gua.msg.debug("날짜차이: " + b.getBetweenDate(a)); -> -2일 차이
   * </pre>
   *
   * @param {String/Date/gua.date} date
   * @param {String} format
   * @return {Number} 일자
   */
  getBetweenDate: function(date, format) {

    var cDate;

    if (gua.chk.isTypDate(date)) {
      cDate = date;
    } else if (gua.chk.isTypStr(date)) {
      cDate = gua.date(date, format);
    } else if (date instanceof gua.date) {
      cDate = date.val();
    }

    return (cDate - this.val()) / 1000 / 60 / 60 / 24;

  },

  /**
   * F: 두 날짜간 시간차이를 구한다.
   *
   * <pre>
   * var a = gua.date("2016-01-01");
   * var b = gua.date("2016-01-03");
   * gua.msg.debug("시간차이: " + b.getBetweeHour(a)); -> -48시간 차이
   * </pre>
   *
   * @param {String/Date/gua.date} date
   * @param {String} format
   * @return {Number} 시간
   */
  getBetweenHour: function(date, format) {

    var cDate;

    if (gua.chk.isTypDate(date)) {
      cDate = date;
    } else if (gua.chk.isTypStr(date)) {
      cDate = gua.date(date, format);
    } else if (date instanceof gua.date) {
      cDate = date.val();
    }

    return (cDate - this.val()) / 1000 / 60 / 60;

  },

  /**
   * F: 두 날짜간 분차이를 구한다.
   *
   * <pre>
   * var a = gua.date("2016-01-03 12:10");
   * var b = gua.date("2016-01-03 12:20");
   * gua.msg.debug("시간차이: " + b.getBetweeHour(a)); -> -10분 차이
   * </pre>
   *
   * @param {String/Date/gua.date} date
   * @param {String} format
   * @return {Number} 분
   */
  getBetweenMinute: function(date, format) {

    var cDate;

    if (gua.chk.isTypDate(date)) {
      cDate = date;
    } else if (gua.chk.isTypStr(date)) {
      cDate = gua.date(date, format);
    } else if (date instanceof gua.date) {
      cDate = date.val();
    }

    return (cDate - this.val()) / 1000 / 60;

  },

  /**
   * F: 월초로 세팅한다.
   *
   * <pre>
   * gua.Date("2016-04-17").setLastDate().toString(); -> "2016-04-30" 반환
   * </pre>
   *
   * @return {gua.date}
   */
  setFirstMonDate: function() {
    if (this.z_val != null) this.z_val = new Date(this.getYear(), this.getMonth() - 1, 1, this.getHour(), this.getMin(), this.getSec(), 1);
    return this;
  },

  /**
   * F: 월말로 세팅한다.
   *
   * <pre>
   * gua.Date("2016-04-17").setLastDate().toString(); -> "2016-04-30" 반환
   * </pre>
   *
   * @return {gua.date}
   */
  setLastMonDate: function() {
    if (this.z_val != null) this.z_val = new Date(this.getYear(), this.getMonth(), 0, this.getHour(), this.getMin(), this.getSec(), 1);
    return this;
  },

  /**
   * F: 년을 더한다.
   *
   * <pre>
   * gua.date().addYear(1 ); -> 현재시간에서 1년을 더한다.
   * gua.date().addYear(-1); -> 현재시간에서 1년을 뺀다.
   * </pre>
   *
   * @param {Number} num 더할 년
   * @return {gua.date}
   */
  addYear: function (num)  {

    if (this.z_val != null) this.z_val.setFullYear(this.z_val.getFullYear() + num);
    return this;

  },

  /**
   * F: 월을 더한다.
   *
   * <pre>
   * gua.date().addMonth(1 ); -> 현재시간에서 1달을 더한다.
   * gua.date().addMonth(-1); -> 현재시간에서 1달을 뺀다.
   * </pre>
   *
   * @param {Number} num 더할 월
   * @return {gua.date}
   */
  addMonth: function (num)  {

    if (this.z_val != null) this.z_val.setMonth(this.z_val.getMonth() + num);
    return this;

  },

  /**
   * F: 일을 더한다.
   *
   * <pre>
   * gua.date().addDate(1 ); -> 현재시간에서 1일을 더한다.
   * gua.date().addDate(-1); -> 현재시간에서 1일을 뺀다.
   * </pre>
   *
   * @param {Number} num 더할 일
   * @return {gua.date}
   */
  addDate: function (num)  {

    if (this.z_val != null) this.z_val.setDate(this.z_val.getDate() + num);
    return this;

  },

  /**
   * F: 시간을 더한다.
   *
   * <pre>
   * gua.date().addHour(1 ); -> 현재시간에서 1시간을 더한다.
   * gua.date().addHour(-1); -> 현재시간에서 1시간을 뺀다.
   * </pre>
   *
   * @param {Number} num 더할 시간
   * @return {gua.date}
   */
  addHour: function (num)  {

    if (this.z_val != null) this.z_val.setHours(this.z_val.getHours() + num);
    return this;
  },

    /**
   * F: 분을 더한다.
   *
   * <pre>
   * gua.date().addMinutes(1 ); -> 현재시간에서 1분을 더한다.
   * gua.date().addMinutes(-1); -> 현재시간에서 1분을 뺀다.
   * </pre>
   *
   * @param {Number} num 더할 시간
   * @return {gua.date}
   */
  addMinutes: function (num)  {

    if (this.z_val != null) this.z_val.setMinutes(this.z_val.getMinutes() + num);
    return this;
  }

}

$(document).ready(function(){
    $.datepicker.setDefaults({
        closeText       : '닫기',
        prevText        : '이전달',
        nextText        : '다음달',
        currentText     : '오늘',
        monthNames      : ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        monthNamesShort : ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        dayNames        : ['일','월','화','수','목','금','토'],
        dayNamesShort   : ['일','월','화','수','목','금','토'],
        dayNamesMin     : ['일','월','화','수','목','금','토'],
        dateFormat: "yy-mm-dd",
        changeMonth: true,
        changeYear: true,
        showButtonPanel: true,
        showOn: "button",
        buttonImageOnly: true,
        buttonImage: gua.c.CONTEXT_ROOT + "/images/calendar.gif",
        buttonText: "Calendar"
    });
    // 로딩바 생성
    gua.loadingBar.create();

    // 서버단에서 넘어온 메세지 출력
    var sayMessage = $("#saymessage").text();
    if (sayMessage != "") {
        gua.msg.alert(sayMessage);
    }
});
