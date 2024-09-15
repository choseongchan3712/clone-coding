const menuContainer = document.querySelector(".menu_container");
const whiteBg = document.querySelector(".white_bg");
const blackLine = document.querySelector(".black_line");
const blackLogo = document.querySelector(".black_logo");
const whiteLogo = document.querySelector(".white_logo");
const languageImg = document.querySelector(".language>img");
const sideMenuImg = document.querySelector(".side_menu>img");
const sideText = document.querySelectorAll(".side_text > li");
const closeBtn = document.querySelector(".close_btn");
const sideSlide = document.querySelector(".side_menu_click")
const sideMenu = document.querySelector(".side_menu");

menuContainer.addEventListener("mouseover", () => {
  whiteBg.style.display = "block";
  blackLine.style.display = "block";
  whiteLogo.style.opacity = "0";
  blackLogo.style.display = "block";
  languageImg.style.filter = "invert(100%)";
  sideMenuImg.style.filter = "invert(100%)";
});
menuContainer.addEventListener("mouseleave", () => {
  whiteBg.style.display = "none";
  blackLine.style.display = "none";
  whiteLogo.style.opacity = "1";
  blackLogo.style.display = "none";
  languageImg.style.filter = "invert(0)";
  sideMenuImg.style.filter = "invert(0)";
});

sideText.forEach((n) => {
  let boldtext = n.querySelector(".side_bold p");
  boldtext.addEventListener("mouseover", () => {
    let otherBold = document.querySelectorAll(".side_bold p");
    otherBold.forEach((o) => {
      o.style.opacity = "0.5";
    });
    boldtext.style.opacity = "1";

    let sideLine = n.querySelector(".side_line");
    let otherLine = document.querySelectorAll(".side_line");
    otherLine.forEach((o) => {
      o.style.opacity = "0";
    });
    sideLine.style.opacity = "1";

    let reText = n.querySelector(".side_re");
    let otherRe = document.querySelectorAll(".side_re");
    otherRe.forEach((o) => {
      o.style.display = "none";
    });
    reText.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  sideSlide.style.transform = "translateX(100vw)";
  sideSlide.style.opacity = "0";
})

sideMenu.addEventListener("click", () => {
  sideSlide.style.transform = "translateX(0)";
  sideSlide.style.opacity = "1";
})