$(document).ready(function() {


  $(".load").click(function() {
    $(".first").css({
      display: 'inherit'
    });
    $(this).hide();
    $(".marquee").css({
      display: 'inherit'
    });
    $("#n1").css({
      display: 'inherit'
    });
  });



  $(".prove").click(function() {
    $(".li").addClass("link");
    $(".yes").hide();
    $(".mla").css({
      display: 'inherit'
    });
    $(".glitch").animate({
      fontSize: '5vw'
    }, "slow");
    $(".prove").animate({
      fontSize: '5vw'
    }, "slow");
    $(".li").addClass("link");

  });

  $(".glitch").click(function() {
    $(".prove").toggle();
    $(".mla").hide();
    $(".itis").css({
      fontSize: '15vw'
    });
    $(".itis").css({
      transition: '1.5s'
    });
  });

  $(".marquee").mouseover(function() {
    $(".no").css({
      textShadow: '.4vw .3vw #f0f'
    });
    $("#n1").css({
      transition: 'none'
    });
  });

  $(".marquee").mouseout(function() {
    $("#n1").css({
      transition: 'all .8s ease'
    });
    $(".no").css({
      textShadow: '0 0 #f0f'
    });
  });

  $(".marquee").click(function() {
    $(".no").toggle();
  });
});

$(document).ready(function() {

  (function($, window, undefined) {
    $.fn.marqueeify = function(options) {
      var settings = $.extend({
        horizontal: true,
        vertical: true,
        speed: 100, // In pixels per second
        container: $(this).parent(),
        bumpEdge: function() {}
      }, options);

      return this.each(function() {
        var containerWidth, containerHeight, elWidth, elHeight, move, getSizes,
          $el = $(this);

        getSizes = function() {
          containerWidth = settings.container.outerWidth();
          containerHeight = settings.container.outerHeight();
          elWidth = $el.outerWidth();
          elHeight = $el.outerHeight();
        };

        move = {
          right: function() {
            $el.animate({
              left: (containerWidth - elWidth)
            }, {
              duration: ((containerWidth / settings.speed) * 1000),
              queue: false,
              easing: "linear",
              complete: function() {
                settings.bumpEdge();
                move.left();
              }
            });
          },
          left: function() {
            $el.animate({
              left: 0
            }, {
              duration: ((containerWidth / settings.speed) * 1000),
              queue: false,
              easing: "linear",
              complete: function() {
                settings.bumpEdge();
                move.right();
              }
            });
          },
          down: function() {
            $el.animate({
              top: (containerHeight - elHeight)
            }, {
              duration: ((containerHeight / settings.speed) * 1000),
              queue: false,
              easing: "linear",
              complete: function() {
                settings.bumpEdge();
                move.up();
              }
            });
          },
          up: function() {
            $el.animate({
              top: 0
            }, {
              duration: ((containerHeight / settings.speed) * 1000),
              queue: false,
              easing: "linear",
              complete: function() {
                settings.bumpEdge();
                move.down();
              }
            });
          }
        };

        getSizes();

        if (settings.horizontal) {
          move.right();
        }
        if (settings.vertical) {
          move.down();
        }

        // Make that shit responsive!
        $(window).resize(function() {
          getSizes();
        });
      });
    };
  })(jQuery, window);

  $(document).ready(function() {

    $('.marquee').marqueeify({
      speed: 300,
      bumpEdge: function() {
        var newColor = "hsl(" + Math.floor(Math.random() * 360) + ", 100%, 50%)";
        $('.marquee .logo').css('fill', newColor);
      }
    });
  });
  //// noooooo///
  var ab = true;
  var ddd = 0;
  $("#n1").click(function() {
    $("#n1").css({
      fontSize: '8vw'
    });

    while (ddd < 2) {
      $("#n1").delay(4000).append("O");
      ddd++;
    }
    ddd = 0;

  });




  // get data
  var d = new Date();
  var n = d.getDay();
  // document.getElementById("demo").innerHTML = n;
  if (n == 4) {
    console.log("today is friday");
    $(".friday").show();
    $(".white").hide();
  } else {
    console.log("today is not friday");
    $(".white").show();
    $(".friday").hide();
  }

})
