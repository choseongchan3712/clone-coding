const menuContainer = document.querySelector(".menu_container");
const whiteBg = document.querySelector(".white_bg");
const blackLine = document.querySelector(".black_line");
const blackLogo = document.querySelector(".black_logo");
const whiteLogo = document.querySelector(".white_logo");
const languageImg = document.querySelector(".language>img");
const sideMenuImg = document.querySelector(".side_menu>img");
const sideText = document.querySelectorAll(".side_text > li");
const closeBtn = document.querySelector(".close_btn");
const sideSlide = document.querySelector(".side_menu_click");
const sideMenu = document.querySelector(".side_menu");
const header = document.querySelector("header");
const menuText = document.querySelectorAll(".menu_text");
const subMenu = document.querySelectorAll(".sub_menu");
const menu = document.querySelectorAll(".menu");


window.addEventListener("wheel", (e) => {
  let upDown = e.wheelDeltaY;
  if (upDown < 0) {
    header.style.transform = "translateY(-80px)";
  } else if (upDown > 0) {
    header.style.transform = "translateY(0)";
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    header.style.backgroundColor = "rgba(255, 255, 255, 0)";
    languageImg.style.filter = "invert(0)";
    sideMenuImg.style.filter = "invert(0)";
    whiteLogo.style.opacity = "1";
    blackLogo.style.display = "none";
    menu.forEach((n) => {
      let thisText = n.querySelector(".menu_text");
      let thisSub = n.querySelector(".sub_menu");
      thisText.addEventListener("mouseover", () => {
        menuText.forEach((e) => {
          e.style.color = "black";
        });
        thisText.style.color = "white";
      });
      thisText.addEventListener("mouseleave", () => {
        menuText.forEach((e) => {
          e.style.color = "white";
        });
      });
      thisSub.addEventListener("mouseover", () => {
        menuText.forEach((e) => {
          e.style.color = "black";
        });
        thisText.style.color = "white";
      });
      thisSub.addEventListener("mouseleave", () => {
        menuText.forEach((e) => {
          e.style.color = "white";
        });
      });

      menuText.forEach((n) => {
        n.style.color = "white";
      });
    });

  } else if (window.scrollY !==0) {
    header.style.backgroundColor = "rgba(255, 255, 255, 1)";
    whiteLogo.style.opacity = "0";
    blackLogo.style.display = "block";
    languageImg.style.filter = "invert(100%)";
    sideMenuImg.style.filter = "invert(100%)";
    menuText.forEach((n) => {
      n.style.color = "black";
    });

    menu.forEach((n) => {
      let thisText = n.querySelector(".menu_text");
      let thisSub = n.querySelector(".sub_menu");
      thisText.addEventListener("mouseover", () => {
        menuText.forEach((e) => {
          e.style.color = "black";
        });
        thisText.style.color = "white";
      });
      thisText.addEventListener("mouseleave", () => {
        menuText.forEach((e) => {
          e.style.color = "black";
        });
      });
      thisSub.addEventListener("mouseover", () => {
        menuText.forEach((e) => {
          e.style.color = "black";
        });
        thisText.style.color = "white";
      });
      thisSub.addEventListener("mouseleave", () => {
        menuText.forEach((e) => {
          e.style.color = "black";
        });
      });

      menuText.forEach((n) => {
        n.style.color = "black";
      });
    });

  }
});

menuContainer.addEventListener("mouseover", () => {
  whiteBg.style.display = "block";
  blackLine.style.display = "block";
  whiteLogo.style.opacity = "0";
  blackLogo.style.display = "block";
  languageImg.style.filter = "invert(100%)";
  sideMenuImg.style.filter = "invert(100%)";
});
menuContainer.addEventListener("mouseleave", () => {
  if (window.scrollY === 0) {
    whiteBg.style.display = "none";
    blackLine.style.display = "none";
    whiteLogo.style.opacity = "1";
    blackLogo.style.display = "none";
    languageImg.style.filter = "invert(0)";
    sideMenuImg.style.filter = "invert(0)";
  } else if (window.scrollY !== 0) {
    whiteBg.style.display = "none";
    blackLine.style.display = "none";
    whiteLogo.style.opacity = "0";
    blackLogo.style.display = "block";
    languageImg.style.filter = "invert(100%)";
    sideMenuImg.style.filter = "invert(100%)";
    menuText.forEach((n) => {
      n.style.color = "black";
    });
  }
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
});

sideMenu.addEventListener("click", () => {
  sideSlide.style.transform = "translateX(0)";
  sideSlide.style.opacity = "1";
});

const language = document.querySelector('.language');
language.addEventListener("mouseover", () => {
  if (window.scrollY !== 0) {
    languageImg.style.filter = "invert(0)";
  }
})
language.addEventListener("mouseleave", () => {
  if (window.scrollY !== 0) {
    languageImg.style.filter = "invert(100%)";
  }
})

