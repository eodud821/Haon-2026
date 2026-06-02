// 사이드바 접기/펼치기 토글
(function () {
  var app = document.querySelector(".app");
  var toggleBtn = document.querySelector(".sidebar-toggle");
  if (!app || !toggleBtn) return;

  var body = document.body;
  if (body.classList.contains("sidebar-collapsed")) {
    app.classList.add("sidebar-collapsed");
  }

  toggleBtn.addEventListener("click", function () {
    app.classList.toggle("sidebar-collapsed");
    body.classList.toggle(
      "sidebar-collapsed",
      app.classList.contains("sidebar-collapsed"),
    );
  });
})();
