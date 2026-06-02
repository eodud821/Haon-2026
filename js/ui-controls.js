// 26p project Info 라디오 버튼
(function () {
  var filterGroups = document.querySelectorAll(".detail-filter");
  if (!filterGroups.length) return;

  filterGroups.forEach(function (group) {
    var buttons = group.querySelectorAll("button");
    if (!buttons.length) return;

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        buttons.forEach(function (b) {
          b.classList.remove("active");
        });
        btn.classList.add("active");
      });
    });
  });
})();

// 28p project-filters 탭
(function () {
  var projectGroups = document.querySelectorAll(".project-filters");
  if (!projectGroups.length) return;

  projectGroups.forEach(function (group) {
    var tabs = group.querySelectorAll(".project-filter");
    if (!tabs.length) return;

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) {
          t.classList.remove("active");
        });
        tab.classList.add("active");
      });
    });
  });
})();

// 31p,41p,50p,56p 상단 탭
(function () {
  var studyTabsGroups = document.querySelectorAll(".study-tabs");
  if (!studyTabsGroups.length) return;

  studyTabsGroups.forEach(function (group) {
    var tabs = group.querySelectorAll("button");
    if (!tabs.length) return;

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) {
          t.classList.remove("active");
        });
        tab.classList.add("active");
      });
    });
  });
})();

// 32p tp-segments 탭
(function () {
  var segGroups = document.querySelectorAll(".tp-segments");
  if (!segGroups.length) return;

  segGroups.forEach(function (group) {
    var tabs = group.querySelectorAll("button");
    if (!tabs.length) return;

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) {
          t.classList.remove("active");
        });
        tab.classList.add("active");
      });
    });
  });
})();

/* 52p textarea 글자수 카운터 */
(function () {
  var ta = document.getElementById("md-summary");
  var count = document.getElementById("md-summary-count");
  if (!ta || !count) return;

  function update() {
    count.textContent = ta.value.length + "/200";
  }

  ta.addEventListener("input", update);
  update();
})();
