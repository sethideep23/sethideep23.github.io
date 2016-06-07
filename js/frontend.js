$(document).ready(function() {
  $('input').keypress(function(event) {
    if(event.which == 13) {
      pushData();
    }
  });
});
