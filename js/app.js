//Menu Icon Toggle
const nav = document.querySelector(".nav-links");
const menu = document.querySelector(".menu");
const links = nav.querySelectorAll("a");

menu.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  menu.classList.toggle("toggle");
});

links.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    menu.classList.toggle("toggle");
  });
});

// Parallax Scroll
(function () {
  var parallax = $(".js-parallax");
  if (parallax.length) {
    parallax.each(function () {
      var _this = $(this),
        scale = _this.data("scale"),
        orientation = _this.data("orientation");

      new simpleParallax(_this[0], {
        scale: scale,
        orientation: orientation,
        overflow: true,
        delay: 0.6,
        transition: "cubic-bezier(0,0,0,1)",
      });
    });
  }
})();

$(document).on("click", 'a[href^="#"]', function (e) {
  var id = $(this).attr("href");
  var $id = $(id);
  if ($id.length === 0) {
    return;
  }

  e.preventDefault();
  var pos = $id.offset().top;
  $("body, html").animate({ scrollTop: pos });
});
