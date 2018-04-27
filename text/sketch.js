$(document).ready(function() {
  // declaring our variable
  var scrollPos;
  // all scrolling animation has to be triggered by the scrolling of the window
  $(window).scroll(function() {
    // assigning a value to scrollPos— the distance from the body to
    // the top of the screen
    scrollPos = $('body').scrollTop();
    // logging what scrollPos is to the console
    console.log("Scroll Position is " + scrollPos);
    // using scrollPos to change some CSS
    $('.rotate').css("transform", "rotate(" + scrollPos + "deg)");
  });


  function openWin() {
    var myWindow = window.open("", "myWindow", "width=200, height=100");
    myWindow.document.write("<p>infinito?infinito?infinito?infinito?infinito?infinito?infinito?infinito?infinito?infinito?infinito?infinito?infinito?infinito?infinito?infinito?infinito?infinito?infinito?infinito?infinito?infinito?infinito?</p>");
    setTimeout(function() {
      myWindow.close()
    }, 2500);
  }

  $("#test").click(function() {
    $(".infinito").css('display','block');
    openWin();

  });

  $("#title2").mouseover(function() {
    $(this).css('opacity','1');
    $("#title1").css('opacity','0');
    $(this).css('color','#00ffff');
    $(this).css('transition','all .2s ease');
    $("#title1").css('transition','all 2s ease');

  });


  $("#title2").mouseout(function() {
    $(this).css('opacity','0');
    $("#title1").css('opacity','1');


  });

  // $("#title1").mouseout(function() {
  //     $(this).css('opacity','1');
  //     $("#title1").css('opacity','0');



  var na = 0;
  var arr1 = ['homogeneous', '相似的', 'homogéneas'];
  $("#homogenous").click(function() {

    $(".right").append('Og iundrned eas o e cef fef n uppher hhx cagon ncame  btok onfuing  te otymrh ers,bhg,tut w, oich hiada easavharly wsea opsoaf hoo.gueeneous linesoshp a ');
    $("#homogenousT").append(arr1[Math.floor(Math.random() * 3)]);
    $(this).css('text-decoration','line-through');

    $("body").append("<p class=\"numby\" id=\"" + "numby1" + na + "\">" + arr1[Math.floor(Math.random() * 3)] + "</p>");
    var num = Math.floor(Math.random() * 88) + 1;
    num *= Math.floor(Math.random() * 2) == 1 ? 1 : -0.5;
    $("#numby1" + na).css("top", (Math.random() * 90) + "%");
    $("#numby1" + na).css("left", num + "%");
    $("#numby1" + na).css("font-size", (Math.random() * 120) + "px");
    na++;
  });

  var nb = 0;
  var arr2 = ['descifrador', 'decoder', '释读专家'];
  $("#decoder").click(function() {
    $(this).css('textDecoration','line-through');
    $(".right").append(' odhseis weoid h fhnd t a wae.ny hdring decdsr wh tldirtuehe gsyudos sm othee lhn weheprs ewrioetitn ion ; iteer aid tsowr ei ');
    $("#decoderT").append(arr2[Math.floor(Math.random() * 3)]);

    $("body").append("<p class=\"numby\" id=\"" + "numby2" + nb + "\">" + arr2[Math.floor(Math.random() * 3)] + "</p>");
    var num = Math.floor(Math.random() * 88) + 1;
    num *= Math.floor(Math.random() * 2) == 1 ? 1 : -0.5;
    $("#numby2" + nb).css("top", (Math.random() * 90) + "%");
    $("#numby2" + nb).css("left", num + "%");
    $("#numby2" + nb).css("font-size", (Math.random() * 120) + "px");
    nb++;
  });


  var nc = 0;
  var arr3 = ['瓜拉尼的萨摩亚——立陶宛文', 'un dialecto samoyedo-lituano del guaraní', 'a Samoyedic Lithuanian dialect of Guarani'];
  $("#lithuanian").click(function() {
    $(this).css('textDecoration','line-through');
    $(".right").append('Esihineh ciac sllntau,wage s agm swlyadic adilesc ft aeuoalarni ihaouseni ttnaigh rablin iantla,lctia bihdencs on.aea:luttwry ');
    $("#lithuanianT").append(arr3[Math.floor(Math.random() * 3)]);

    $("body").append("<p class=\"numby\" id=\"" + "numby3" + nc + "\">" + arr3[Math.floor(Math.random() * 3)] + "</p>");
    var num = Math.floor(Math.random() * 88) + 1;
    num *= Math.floor(Math.random() * 2) == 1 ? 1 : -0.5;
    $("#numby3" + nc).css("top", (Math.random() * 90) + "%");
    $("#numby3" + nc).css("left", num + "%");
    $("#numby3" + nc).css("font-size", (Math.random() * 100) + "px");
    nc++;
  });

  var nd = 0;
  var arr4 = ['unlimited repetition', 'repetición ilimitada', '无限反复'];
  $("#repetition").click(function() {
    $(this).css('textDecoration','line-through');
    $(".right").append('Ntmobeiative hs evwnaritoai tnfeas aeonlts dnciephrd: uetnliom idem teios wrpiit tawn,taleysisitlelusroad eih xtaonmsc eoctnoplsf ioh. ');
    $("#repetitionT").append(arr4[Math.floor(Math.random() * 3)]);

    $("body").append("<p class=\"numby\" id=\"" + "numby4" + nd + "\">" + arr4[Math.floor(Math.random() * 3)] + "</p>");
    var num = Math.floor(Math.random() * 99) + 1;
    num *= Math.floor(Math.random() * 2) == 1 ? 1 : -0.5;
    $("#numby4" + nd).css("top", (Math.random() * 100) + "%");
    $("#numby4" + nd).css("left", num + "%");
    $("#numby4" + nd).css("font-size", (Math.random() * 120) + "px");
    nd++;
  });

  var ne = 0;
  var arr5 = ['the fundamental law of the Library', 'la ley fundamental de la Biblioteca', '图书馆的基本规律'];
  $("#law").click(function() {
    $(this).css('textDecoration','line-through');
    $(".right").append('Ehs i pen omadtaw oeasibtr xtasibl fobranal lf href ilus tesgner a ioiatcovr h aeo dime eLemf.teundpls ry ');
    $("#lawT").append(arr5[Math.floor(Math.random() * 3)]);
    // $("#homogenous").css("font-size", "0");

    $("body").append("<p class=\"numby\" id=\"" + "numby5" + ne + "\">" + arr5[Math.floor(Math.random() * 3)] + "</p>");
    var num = Math.floor(Math.random() * 99) + 1;
    num *= Math.floor(Math.random() * 2) == 1 ? 1 : -0.5;
    $("#numby5" + ne).css("top", (Math.random() * 100) + "%");
    $("#numby5" + ne).css("left", num + "%");
    $("#numby5" + ne).css("font-size", (Math.random() * 100) + "px");
    ne++;
  });


  var nf = 0;
  $("#symbol").click(function() {
    $(this).css('textDecoration','line-through');
    $(".right").append('the space, the period, the comma, the twenty-two letters of the alphabet.');
    $("#symbolT").append(' ,.qwertyopasdfghklxcvbnm');

    $("body").append("<p class=\"numby\" id=\"" + "numby6" + nf + "\">" + '[ ] [,] [.]' + "</p>");
    $("#numby6" + nf).css("top", (Math.random() * 40) + "%");
    $("#numby6" + nf).css("left", (Math.random() * 100) + "%");
    $("#numby6" + nf).css("font-size", (Math.random() * 200) + "px");
    nf++;
  });

  var ng = 0;
  var arr7 = ['In the vast Library there are no two identical books.', '在宏大的图书馆里，没有两本相同的书', 'No hay en la vasta Biblioteca, dos libros idénticos.'];
  $("#identical").click(function() {
    $(this).css('textDecoration','line-through');
    $(".right").append('Og iundrned eas o e cef fef n uppher hhx cagon ncame  btok onfuing  te otymrh ers,bhg,tut w, oich hiada easavharly wsea opsoaf hoo.gueeneous linesoshp a ');
    $("#identicalT").append(arr7[Math.floor(Math.random() * 3)]);


    $("body").append("<p class=\"numby\" id=\"" + "numby7" + ng + "\">" + arr7[Math.floor(Math.random() * 3)] + "</p>");
    var num = Math.floor(Math.random() * 99) + 1;
    num *= Math.floor(Math.random() * 2) == 1 ? 1 : -0.5;
    $("#numby7" + ng).css("top", (Math.random() * 100) + "%");
    $("#numby7" + ng).css("left", num + "%");
    $("#numby7" + ng).css("font-size", (Math.random() * 100) + "px");
    ng++;
  });

  var nh = 0;
  var arr8 = ['all the possible combinations', '全部可能实现的组合', 'todas las posibles combinaciones'];
  $("#combination").click(function() {
    $(this).css('textDecoration','line-through');

    $(".right").append('trmainnt vrythngroihlvs argm thry es tiotel d tis a ncontrover)tbl prdfemiss h eucd thtiot e the isons obl ceberaht tis dsiest(er altel thdiloey-o oesaoemebntof the twn:trtheograepst, s nhcil isymebols a ienduly evmabr ewhch, dtahoee paugh xf ');
    $("#combinationT").append(arr8[Math.floor(Math.random() * 3)]);

    $("body").append("<p class=\"numby\" id=\"" + "numby8" + nh + "\">" + arr8[Math.floor(Math.random() * 3)] + "</p>");
    var num = Math.floor(Math.random() * 99) + 1;
    num *= Math.floor(Math.random() * 2) == 1 ? 1 : -0.5;
    $("#numby8" + nh).css("top", (Math.random() * 100) + "%");
    $("#numby8" + nh).css("left", num + "%");
    $("#numby8" + nh).css("font-size", (Math.random() * 100) + "px");
    nh++;
  });

  var ni = 0;
  var arr9 = ['the faithful catalogues of the Library', '图书馆的准确的目录', 'el catálogo fiel de la Biblioteca'];
  $("#faithful").click(function() {
    $(this).css('textDecoration','line-through');
    $(".right").append('Og iundrned eas o e cef fef n uppher hhx cagon ncame  btok onfuing  te otymrh ers,bhg,tut w, oich hiada easavharly wsea opsoaf hoo.gueeneous linesoshp a ');
    $("#faithfulT").append(arr9[Math.floor(Math.random() * 3)]);

    $("body").append("<p class=\"numby\" id=\"" + "numby9" + ni + "\">" + arr9[Math.floor(Math.random() * 3)] + "</p>");
    var num = Math.floor(Math.random() * 99) + 1;
    num *= Math.floor(Math.random() * 2) == 1 ? 1 : -0.5;
    $("#numby9" + ni).css("top", (Math.random() * 100) + "%");
    $("#numby9" + ni).css("left", num + "%");
    $("#numby9" + ni).css("font-size", (Math.random() * 100) + "px");
    ni++;
  });

});
