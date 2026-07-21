// Menu mobile toggle
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  // Form liên hệ: chuyển hướng qua mailto (thay bằng Formspree/Google Form nếu muốn nhận trực tiếp)
  var form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector("#name").value;
      var email = form.querySelector("#email").value;
      var message = form.querySelector("#message").value;
      var subject = encodeURIComponent("Liên hệ từ website - " + name);
      var body = encodeURIComponent(message + "\n\nEmail liên hệ: " + email);
      window.location.href = "mailto:info.vjiwu@gmail.com?subject=" + subject + "&body=" + body;
    });
  }
});
