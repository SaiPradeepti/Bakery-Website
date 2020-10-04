$(function () {
  $(".hamburger-menu").on("click", function () {
    $(".toggle").toggleClass("open");
    $("nav").toggleClass("open");
  });

  AOS.init({
    easing: "ease",
    duration: 1000,
  });
});
