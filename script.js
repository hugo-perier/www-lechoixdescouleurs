$(document).ready(function() {
  // Submenu
  $('#submenu li.active').append('<ul id="anchors"></ul>');

  $('h3').each(function() {
    $('#anchors').append('<li><a href=#>' + $(this).text() + '</a></li>');
  });


  // Scrolldown
  $('#home header').append('<span id="scroll-down">découvrir</span>');


  // Parallax
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  var pageHeight = document.documentElement.scrollHeight;

  var positionOnLoad1 = -200 + 'px';
  var positionOnLoad2 = getRandomInt(pageHeight) + 'px';
  var positionOnLoad3 = 600 + 'px';
  var positionOnLoad4 = getRandomInt(pageHeight) + 'px';

  $('main').css('background-position-y', positionOnLoad1 + ', ' + positionOnLoad2 + ', ' + positionOnLoad3 + ', ' + positionOnLoad4);

  $(document).scroll(function() {
    var positionScroll = $(window).scrollTop();
    var positionScroll1 = parseInt(positionOnLoad1) + parseInt(positionScroll) * .8 + 'px';
    var positionScroll2 = parseInt(positionOnLoad2) + parseInt(positionScroll) * -.7 + 'px';
    var positionScroll3 = parseInt(positionOnLoad3) + parseInt(positionScroll) * .5 + 'px';
    var positionScroll4 = parseInt(positionOnLoad4) + parseInt(positionScroll) * -.4 + 'px';

    $('main').css('background-position-y', positionScroll1 + ', ' + positionScroll2 + ', ' + positionScroll3 + ', ' + positionScroll4);
  });
});
