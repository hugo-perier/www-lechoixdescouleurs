$(document).ready(function() {
  // Submenu
  $('#submenu li.active').append('<ul id="anchors"></ul>');

  $('h3').each(function() {
    $('#anchors').append('<li><a href=#>' + $(this).text() + '</a></li>');
  });

  // Scrolldown
  $('#home header').append('<button id="scroll-down" type="button">découvrir</button>');

  $('#scroll-down').on('click',function(){
    $('html, body').animate({scrollTop: $("main").offset().top}, 500);
  });

  // Menu mobile
  $('nav').prepend('<div id="menu_btn"><span></span><span></span><span></span></div>');


  // Parallax
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  var pageHeight = document.documentElement.scrollHeight;

  var positionOnLoad1 = -200 + 'px';
  var positionOnLoad2 = getRandomInt(pageHeight) + 'px';
  var positionOnLoad3 = 600 + 'px';
  var positionOnLoad4 = getRandomInt(pageHeight) + 'px';

  $('#manager-changement main, #responsable-changement main, #transformation-entreprise main').css('background-position-y', positionOnLoad1 + ', ' + positionOnLoad2 + ', ' + positionOnLoad3 + ', ' + positionOnLoad4);

  $(document).scroll(function() {
    var positionScroll = $(window).scrollTop();
    var positionScroll1 = parseInt(positionOnLoad1) + parseInt(positionScroll) * .8 + 'px';
    var positionScroll2 = parseInt(positionOnLoad2) + parseInt(positionScroll) * -.7 + 'px';
    var positionScroll3 = parseInt(positionOnLoad3) + parseInt(positionScroll) * .5 + 'px';
    var positionScroll4 = parseInt(positionOnLoad4) + parseInt(positionScroll) * -.4 + 'px';

    $('#manager-changement main, #responsable-changement main, #transformation-entreprise main').css('background-position-y', positionScroll1 + ', ' + positionScroll2 + ', ' + positionScroll3 + ', ' + positionScroll4);
  });


  // Ancres
  var windowHeight = $(window).height();

  var sectionNth = [];
  var sectionList = [];
  $('main h3').each(function( index ){
      var nth = index + 1,
          position = $('h3:nth-of-type('+nth+')').offset().top,
          section = position - windowHeight / 2;

      sectionNth.push(nth);
      sectionList.push(section);
  });

  $(document).scroll(function() {
    sectionNth.forEach(function(element) {
      if (($(window).scrollTop() > sectionList[element - 1]) && ($(window).scrollTop() < sectionList[element])){
        $('nav li.active #anchors li').removeClass("current");
        $('nav li.active #anchors li:nth-of-type('+element+')').addClass("current");
      }
    });

    var last_section = sectionNth[sectionNth.length - 1],
        preFooter_position = $('main > section').offset().top,
        preFooter_section = preFooter_position - windowHeight / 2;

    if (($(window).scrollTop() > sectionList[last_section - 1]) && ($(window).scrollTop() < preFooter_section)){
      $('nav li.active #anchors li').removeClass("current");
      $('nav li.active #anchors li:nth-of-type('+last_section+')').addClass("current");
    }
  });

});
