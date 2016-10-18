$(document).ready(function() {
  $("button#start").click(function() {
    debugger;
    $("body").removeClass("light").addClass("black");
    $(".header").removeClass("darkheader").addClass("money");
  });

  $("button#rapit").click(function() {
    debugger;
    $("body").removeClass("black").addClass("light");
    $(".header").removeClass("money").addClass("darkheader");
  });


});
