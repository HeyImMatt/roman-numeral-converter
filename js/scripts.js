$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    const input = $("#user-input").val();

    $("#output").append(`<p>${output}</p>`);
  });
});