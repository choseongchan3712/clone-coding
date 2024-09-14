const header = document.querySelector("header");
const menuWrap = document.querySelector(".menu_wrap");
const headerWhiteBox = document.querySelector(".white_box");
const menuText = document.querySelectorAll(".menu_text");
const logoWhite = document.querySelector(".logo_white");
const logoBlack = document.querySelector(".logo_black");

menuText.forEach((i) => {
  i.addEventListener("mouseover", () => {
    headerWhiteBox.style.display = "block";
    logoWhite.style.opacity = "0";
    logoBlack.style.display = "block";
  });
});
//# 노드 선택을 querySelectorAll로 했다면, 이벤트를 부여할때 forEach를 사용해야 한다.

menuWrap.addEventListener("mouseleave", () => {
  headerWhiteBox.style.display = "none";
  logoWhite.style.opacity = "1";
  logoBlack.style.display = "none";
});
