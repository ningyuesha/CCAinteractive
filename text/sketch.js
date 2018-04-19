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


  var na = 0;
  var arr = ["homogeneous ", "相似的", "homogéneas"];
  $("#homogenous").click(function() {

    $(".right").append('Hace quinientos años, el jefe de un hexágono superior dio con un libro tan confuso como los otros, pero que tenía casi dos hojas de líneas homogéneas.');
    $("#homogenousT").append('but which had nearly two pages of homogeneous lines.');
    // $("#homogenous").css("font-size", "0");

    $("body").append("<p class=\"numby\" id=\"" + "numby1" + na + "\">" + 'HOMOGENEOUS' + "</p>");
    $("#numby1" + na).css("top", (Math.random() * 100) + "%");
    $("#numby1" + na).css("left", (Math.random() * 100) + "%");
    $("#numby1" + na).css("font-size", (Math.random() * 100) + "px");
    na++;
  });

  var nb = 0;
  $("#lithuanian").click(function() {

    $(".right").append('这是瓜拉尼人的萨莫那德——立陶宛方言，还附带古典的阿拉伯语变音。');
    $("#lithuanianT").append(' a Samoyed          ic Lithuanian dialect of Guarani, ');

    $("body").append("<p class=\"numby\" id=\"" + "numby2" + nb + "\">" + '立陶宛方言' + "</p>");
    $("#numby2" + nb).css("top", (Math.random() * 40) + "%");
    $("#numby2" + nb).css("left", (Math.random() * 100) + "%");
    $("#numby2" + nb).css("font-size", (Math.random() * 200) + "px");
    nb++;
  });

  var nc = 0;
  $("#symbol").click(function() {

    $(".right").append(' the space, the period, the comma, the twenty-two letters of the alphabet.');
    $("#symbolT").append(' ,.qwertyopasdfghklxcvbnm');

    $("body").append("<p class=\"numby\" id=\"" + "numby3" + nc + "\">" + '[ ] [,] [.]' + "</p>");
    $("#numby3" + nc).css("top", (Math.random() * 40) + "%");
    $("#numby3" + nc).css("left", (Math.random() * 100) + "%");
    $("#numby3" + nc).css("font-size", (Math.random() * 200) + "px");
    nc++;
  });

});
