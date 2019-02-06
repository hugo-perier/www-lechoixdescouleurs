$(document).ready(function() {
  // Submenu
  $('#submenu li.active').append('<ul id="anchors"></ul>');

  $('h3').each(function() {
    $('#anchors').append('<li><a href=#>' + $(this).text() + '</a></li>');
  });

  // Scrolldown
  $('#home header').append('<span id="scroll-down">découvrir</span>');

});
