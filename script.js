$(document).ready(function() {
  $('#submenu li.active').append('<ul id="anchors"></ul>');

  $('h3').each(function() {
    $('#anchors').append('<li>' + $(this).text() + '</li>');
  });
});
