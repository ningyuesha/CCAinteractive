$(document).ready(function() {

  $('#button-2').click(function() {
    $(this).animate({
      opacity: 0
    }, 2000);
  });

  $('#button-3').click(function() {
    $(this).animate({
      opacity: 0.4,
    }, 1000);
  });

  $('#button-4').click(function() {
    $("#button-5").toggle("ease-in");
  });



  /*---------5---------*/

  $("#button-5").click(function() {
    $("#hi").html("I'M NING");

  });


  /*---------7---------*/

  $('#button-7').click(function() {
    $(this).animate({
      height: '500px',
      width: '100vw'
    }, 500);
  });

  /*---------6---------*/

  var b6 = true;
  $("#button-6").click(function() {

    if (b6 == true) {
      $("#slide").animate({
        left: "100%"
      }, 1000);
      f = false;
    } else {
      $("#slide").animate({
        left: "0%"
      }, 1000);
      b6 = true;
    }
  });

  /*---------8---------*/

  var heart = true;
  $("#button-8").click(function() {

    if (heart == true) {
      $(".heart").css("width", "10vw");
      $(".heart").css("height", "9vw");
      heart = false;
    } else {
      $(".heart").css("width", "5vw");
      $(".heart").css("height", "4.5vw");
      heart = true;
    }
  });

  /*---------9---------*/

  $("#button-9").click(function() {
    location.reload();
  });

  /*---------10---------*/

  $("#button-10").click(function() {
    $("#num10").animate({
      fontSize: '300px'
    }, "slow");
  });

  /*---------11---------*/

  $("#button-11").click(function() {
    var b11 = $("#button-11");
    b11.animate({
      height: '500px',
      opacity: '0.4'
    }, "slow");
    b11.animate({
      width: '66.66vw',
      opacity: '0.8'
    }, "slow");
    b11.animate({
      height: '250px',
      opacity: '0.4'
    }, "slow");
    b11.animate({
      width: '33.33vw',
      opacity: '1',
    }, "ease");
    b11.css("background-color", "pink");

  });

  /*---------13---------*/

  var b13 = 13;
  $("#counter").click(function() {
    b13++;
    $("#counter").html(b13);

  });

  /*---------15---------*/

  var b15 = true;
  $("#button-15").click(function() {
    if (b15 == true) {
      $("#cover").css('position', 'fixed');
      $("#cover").css('z-index', '10');
      b15 = false;
    } else {
      $("#cover").css('position', 'absolute');
      $("#cover").css('z-index', '0');
      b15 = true;
    }
  });

  /*---------16---------*/

  $("#hey").on("click", function() {
    $(this).hide();
  });

  $("#hey1").on("click", function() {
    $(this).hide();
  });

  /*---------17---------*/

  var b17 = true;
  $("#button-17").click(function() {
    if (b17 == true) {
      $("#ooo").css("letter-spacing", "2em");
      $("#ooo").css("left", "54%");

      b17 = false;
    } else {
      $("#ooo").css("letter-spacing", "-2px");
      $("#ooo").css("left", "50%");

      b17 = true;
    }

  });
  /*---------18---------*/

  $("#button-18").mouseenter(function() {
    alert("I Love You ❤️");
  });

  /*---------21---------*/

  var b21 = true;
  $("#button-21").click(function() {
    if (b21 == true) {
      $("#sun").css("margin-top", "0");
      $("#button-21").css("background-color", "#03192B");

      b21 = false;
    } else {
      $("#sun").css("margin-top", "350px");
      $("#button-21").css("background-color", "#50cbff");

      b21 = true;
    }
  });

  /*---------22---------*/

  var b24 = true;
  $("#button-24").click(function() {
    if (b24 == true) {
      $(".num").css("font-size", "2em");
      $("#button-24").css("background", "#pink");

      b24 = false;
    } else {
      $(".num").css("font-size", "10em");
      $("#button-24").css("background-color", "#fff8d8");

      b24 = true;
    }
  });

  /*---------23---------*/

  var b23 = true;
  $("#button-23").click(function() {
    if (b23 == true) {
      $("#rainbow").css('position', 'fixed');
      $("#rainbow").css('z-index', '10');
      b23 = false;
    } else {
      $("#rainbow").css('position', 'absolute');
      $("#rainbow").css('z-index', '0');
      b23 = true;
    }
  });

  /*---------24---------*/

  var rb = 0;
  $("#button-22").mouseover(function() {

    $("#add").css("top", (Math.random() * 100) + "%");
    $("#add").css("left", (Math.random() * 100) + "%");

    rb++;
  });

  /*---------25---------*/

  var b25 = true;
  $("#button-25").click(function() {
    if (b25 == true) {
      $("#border").css('border-radius', '0');
      $("#border").css('background', 'yellow');
      $(".buttonchange").css('background', 'yellow');

      b25 = false;
    } else {
      $("#border").css('border-radius', '50%');
      $("#border").css('background', '#fff8d8');
      $(".buttonchange").css('background', '#fff8d8');
      b25 = true;
    }
  });

	/*---------26---------*/

  var b26 = true;
  $("#button-26").click(function() {
    if (b26 == true) {
      $(".num").css('color', 'white');
      b26 = false;
    } else {
      $(".num").css('color', '#4a00ca12');
      b26 = true;
    }
  });

	/*---------27---------*/

  var b27 = true;
  $("#button-27").click(function() {
    if (b27 == true) {
      $(".item").css('height', '500px');
      $(".item").css('margin', '1vw');
      $(".item").css('width', '31vw');
      $("body").css('background', '#26dfd4');
      b27 = false;
    } else {
      $(".item").css('height', '250px');
      $(".item").css('margin', '0vw');
      $(".item").css('width', '33.33vw');
      b27 = true;
    }
  });

  /*---------28---------*/
  var b28 = true;
  $("#button-28").click(function() {
    if (b28 == true) {
      $(".threesome").addClass("apart");
      b28 = false;
    } else {
      $(".threesome").removeClass("apart");
      b28 = true;
    }
  });

  /*---------29---------*/
  var b29 = true;
  $("#button-29").click(function() {
    if (b29 == true) {
      $(".threesome").addClass("size");
      b29 = false;
    } else {
      $(".threesome").removeClass("size");
      b29 = true;
    }
  });

  /*---------30---------*/
  var b30 = true;
  $("#button-30").click(function() {
    if (b30 == true) {
      $(".threesome").addClass("disapear");
      b30 = false;
    } else {
      $(".threesome").removeClass("disapear");
      b30 = true;
    }
  });

	/*---------31---------*/

  var b31 = true;
  $("#button-31").click(function() {
    if (b31 == true) {
      $(".p").addClass("pulse");
      $(".p").addClass("heart");

      b31 = false;
    } else {
      $(".p").removeClass("pulse");
      $(".p").removeClass("heart");
      b31 = true;
    }
  });

	/*---------32---------*/

  var b32 = true;
  $("#button-32").click(function() {
    if (b32 == true) {
      $("iframe").css("display", "inherit");
      $("#exit").html("&#9746");
      $("#exit").addClass("exit");
      $("#exit").addClass("exit");

      b32 = false;
    } else {
      $("iframe").css("display", "none");
      $("#exit").removeClass("exit");
      $("#exit").html("32");
      b32 = true;
    }
  });

  /*------------------34------------------*/

  var b34 = true;

  $('#button-34').click(function() {
    if (b34 == true) {
      $("#button-35").css("background-color", "#00bcd4");
      b34 = false;
    } else {
      $("#button-35").css("background-color", "#ffeb3b");
      nnn = true;
    }
  });

  /*------------------35------------------*/


  var b35 = true;

  $('#button-35').click(function() {
    if (b35 == true) {
      $("#button-35").css("background-color", "pink");
      b35 = false;
    } else {
      $("#button-35").css("background-color", "#e91e63");
      b35 = true;
    }
  });

  /*------------------36------------------*/

  var b36 = true;

  $('#button-36').click(function() {
    if (b36 == true) {
      $("#button-35").css("background-color", "#009688");
      b36 = false;
      $("#button-34").css("background-color", "#009688");
      b36 = false;
      $("#button-36").css("background-color", "#ffc107");
      b36 = false;
    } else {
      $("#button-35").css("background-color", "#ffc107");
      b36 = true;
      $("#button-34").css("background-color", "#ffc107");
      b36 = true;
      $("#button-36").css("background-color", "#009688");
      b36 = false;
    }
  });

  /*---------37---------*/

  var b37 = 0;
  $("#button-37").click(function() {
    if (b37 == 0) {
      $(this).css("left", "10px");
      b37++;
    } else if (b37 == 1) {
      $(this).css("left", "20px");
      $(this).css("top", "20px");
      b37++;
    } else if (b37 == 2) {
      $(this).css("left", "30px");
      $(this).css("top", "100px");
      b37++;
    } else if (b37 == 3) {
      $(this).css("left", "40px");
      $(this).css("top", "250px");
      b37++;
    }
  });


  /*---------38---------*/

  var b38 = true;
  $("#button-38").click(function() {
    if (b38 == true) {
      $(this).addClass("drop");
      b38 = false;
    } else {

      $(this).removeClass("drop");
      b38 = true;
    }
  });

  /*------------------39------------------*/


  var b39 = true;

  $('#button-39').click(function() {
    if (b39 == true) {
      $("#button-39").css("top", "225px");
      $("#button-39").css("background", "pink");

      b39 = false;
    } else {
      $("#button-39").css("top", "0");
      $("#button-39").css("background", "#fff8d8");
      b39 = true;
    }
  });

  /*------------------40------------------*/

  $('#button-40').click(function() {
    $(this).animate({
      width: '96vw',
      margin: '2vw 2vw 1vw 2vw'
    }, 2000);
    $('#button-41').animate({
      width: '96vw',
      margin: '1vw 2vw 1vw 2vw'
    }, 2000);
    $('#button-42').animate({
      width: '96vw',
      margin: '1vw 2vw 1vw 2vw'
    }, 2000);
    $('#button-43').animate({
      width: '96vw',
      margin: '1vw 2vw 1vw 2vw'
    }, 2000);
    $('#button-44').animate({
      width: '96vw',
      margin: '1vw 2vw 2vw 2vw'
    }, 2000);
  });


  /*---------41---------*/
  var kb = 0;
  $("#button-41").click(function() {
    if (kb == 0) {
      $('body').css("background-color", "#FFF07F");
      kb++;
    } else if (kb == 1) {
      $('body').css("background-color", "#C1FF7F");
      kb++;
    } else if (kb == 2) {
      $('body').css("background-color", "#7FFFBD");
      kb++;
    } else if (kb == 3) {
      $('body').css("background-color", "#7FD0FF");
      kb++;
    } else if (kb == 4) {
      $('body').css("background-color", "#B0A1FF");
      kb++;
    } else if (kb == 5) {
      $('body').css("background-color", "#F6A1FF");
      kb++;
    } else if (kb == 6) {
      $('body').css("background-color", "#FFA1A1");
      kb++;
    } else {
      $('body').css("background-color", "#FFA963");
      kb = 0;
    }
  });


  /*---------42---------*/
  var kb = 0;
  $("#button-42").click(function() {
    if (kb == 0) {
      $('.item').css("background-color", "#FFF07F");
      kb++;
    } else if (kb == 1) {
      $('.item').css("background-color", "#C1FF7F");
      kb++;
    } else if (kb == 2) {
      $('.item').css("background-color", "#7FFFBD");
      kb++;
    } else if (kb == 3) {
      $('.item').css("background-color", "#7FD0FF");
      kb++;
    } else if (kb == 4) {
      $('.item').css("background-color", "#B0A1FF");
      kb++;
    } else if (kb == 5) {
      $('.item').css("background-color", "#F6A1FF");
      kb++;
    } else if (kb == 6) {
      $('.item').css("background-color", "#FFA1A1");
      kb++;
    } else {
      $('.item').css("background-color", "#FFA963");
      kb = 0;
    }
  });

  /*---------43---------*/
  var kb = 0;
  $("#button-43").click(function() {
    if (kb == 0) {
      $('.num').css("color", "red");
      $('.num').css("opacity", "0.3");

      kb++;
    } else if (kb == 1) {
      $('.num').css("color", "#4a00ca12");
      kb++;
    } else if (kb == 2) {
      $('.num').css("color", "green");
      $('.num').css("opacity", "0.3");

      kb++;
    } else if (kb == 3) {
      $('.num').css("color", "blue");
      $('.num').css("opacity", "0.3");

      kb++;
    } else if (kb == 4) {
      $('.num').css("color", "purple");
      $('.num').css("opacity", "0.3");

      kb++;
    } else {
      $('.num').css("color", "deeppink");
      $('.num').css("opacity", "0.3");

      kb = 0;
    }
  });
  /*---------44---------*/
  var b44 = true;
  $("#button-44").click(function() {
    if (b44 == true) {
      $(".item").css("margin-bottom", "1vw");
      $(".item").css("margin-left", "1vw");
      $(".item").css("width", "31vw");
      b44 = false;
    } else {
      $(".item").css("margin-bottom", "0");
      $(".item").css("margin-right", "0");
      $(".item").css("width", "33.33vw");
      b44 = true;
    }
  });
  /*---------45---------*/
  var b45 = true;
  $("#button-45").click(function() {
    if (b45 == true) {
      $(".item").css("filter", "hue-rotate(100deg)");
      $("body").css("filter", "hue-rotate(180deg)");
      b45 = false;
    } else {
      $(".item").css("filter", "hue-rotate(0deg)");

      b45 = true;
    }
  });


  /*---------46---------*/
  var b46 = 0;
  $("#button-46").click(function() {
    $(this).append("<marquee class=\"moveIt\" id=\"marq" + b46 + "\">⭐️ 🐥</marquee>");
    b46++;

  });

  /*---------47---------*/
  var b47 = true;
  $("#button-47").click(function() {
    if (b47 == true) {
      $("body").css("-webkit-filter", "grayscale(100%)");
      $("body").css("filter", "grayscale(100%)");

      b47 = false;
    } else {
      $("body").css("-webkit-filter", "grayscale(0%)");
      $("body").css("filter", "grayscale(0%)");

      b47 = true;
    }
  });
  /*---------48---------*/

  var b48 = true;
  $("#button-48").click(function() {
    $(".item").animate({
      "opacity": "0"
    }, 600);
    $(".item").delay(800).animate({
      "opacity": "1"
    }, 600);

  });
  /*---------49---------*/

  var b49 = true;
  $("#button-49").click(function() {
    if (b49 == true) {
      $("#blk").css('position', 'fixed');
      $("#blk").css('z-index', '10');
      b49 = false;
    } else {
      $("#blk").css('position', 'absolute');
      $("#blk").css('z-index', '0');
      b49 = true;
    }
  });
  /*---------50---------*/

  var bb = true;
  $("#button-50").click(function() {
    $(".item").animate({
      "height": "0"
    }, 800);
    $(".item").delay(1200).animate({
      "width": ""
    }, 800);

  });


});
