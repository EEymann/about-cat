$(document).ready(function() {
  $("button#aqua").click(function() {
    $("body").removeClass();
    $("body").addClass("aqua-background");
  });

  $("button#pink").click(function() {
    $("body").removeClass();
    $("body").addClass("pink-background");
  });

  $("button#violet").click(function() {
    $("body").removeClass();
    $("body").addClass("violet-background");
  });

  $("button#original").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
  });
});