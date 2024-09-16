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
  } else if (window.scrollY !== 0) {
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

const language = document.querySelector(".language");
language.addEventListener("mouseover", () => {
  if (window.scrollY !== 0) {
    languageImg.style.filter = "invert(0)";
  }
});
language.addEventListener("mouseleave", () => {
  if (window.scrollY !== 0) {
    languageImg.style.filter = "invert(100%)";
  }
});

const section1MainImg = document.querySelector(".section_1 img");
const section1MainText = document.querySelector(".section_1 .main_text");
const section1SubText = document.querySelector(".section_1 .sub_text");

document.addEventListener("DOMContentLoaded", () => {
  section1MainImg.animate(
    [{ transform: "scale(1)" }, { transform: "scale(1.1)" }],
    {
      duration: 3000, //!재생 시간
      fill: "forwards", //! 끝나면 멈추는 점. forward는 끝나는 점
      iterations: 1, //! 반복 횟수
      easing: "ease-out",
    }
  );

  section1MainText.animate (
    [
      {transform: "translateY(200px)", opacity: 0},
      {transform: "translateY(0)", opacity: 1},
    ],
    {
      duration: 1000,
      fill: "forwards",
      iterations: 1,
      easing: "ease-in-out",
    }
  );
  
  section1SubText.animate (
    [
      {transform: "translateY(200px)", opacity: 0},
      {transform: "translateY(0)", opacity: 1},
    ],
    {
      duration: 1000,
      fill: "forwards",
      iterations: 1,
      easing: "ease-in-out",
      delay: 500,
    }
  );

});


const section2TextContainer = document.querySelector(".section_2 .text_container");
const section2LeftContents = document.querySelector(".section_2 .left_contents");
const section2rightContents = document.querySelector(".section_2 .right_contents");





window.addEventListener("scroll", () => {
  if (window.scrollY === 500) {
    window.addEventListener("wheel", (e) => {
      let upDown = e.deltaY;
      if (upDown < 0) {
        section2TextContainer.style.transform = "translateY(200px)";
        section2TextContainer.style.opacity = 0;
      } else if (upDown > 0) {
        section2TextContainer.style.transform = "translateY(0)";
        section2TextContainer.style.opacity = 1;
      }
    })
  } else if (window .scrollY > 500) {
    section2TextContainer.style.transform = "translateY(0)";
    section2TextContainer.style.opacity = 1;
  } else if (window .scrollY < 500) {
    section2TextContainer.style.transform = "translateY(200px)";
    section2TextContainer.style.opacity = 0;
  }
})

window.addEventListener("scroll", () => {
  if (window.scrollY === 700) {
    window.addEventListener("wheel", (e) => {
      let upDown = e.deltaY;
      if (upDown < 0) {
        section2LeftContents.style.transform = "translateY(200px)";
        section2LeftContents.style.opacity = 0;
        section2rightContents.style.transform = "translateY(200px)";
        section2rightContents.style.opacity = 0;
        section2rightContents.style.transitionDelay = "0s";
      } else if (upDown > 0) {
        section2LeftContents.style.transform = "translateY(0)";
        section2LeftContents.style.opacity = 1;
        section2rightContents.style.transform = "translateY(0)";
        section2rightContents.style.opacity = 1;
        section2rightContents.style.transitionDelay = "0.5s";
      }
    })
  } else if (window .scrollY > 700) {
    section2LeftContents.style.transform = "translateY(0)";
    section2LeftContents.style.opacity = 1;
    section2rightContents.style.transform = "translateY(0)";
    section2rightContents.style.opacity = 1;
    section2rightContents.style.transitionDelay = "0.5s";
  } else if (window .scrollY < 700) {
    section2LeftContents.style.transform = "translateY(200px)";
    section2LeftContents.style.opacity = 0;
    section2rightContents.style.transform = "translateY(200px)";
    section2rightContents.style.opacity = 0;
    section2rightContents.style.transitionDelay = "0s";
  }
})

const contents1 = document.querySelector(".section_3 .contents_1");
const contents2 = document.querySelector(".section_3 .contents_2");
const contents3 = document.querySelector(".section_3 .contents_3");
const contents4 = document.querySelector(".section_3 .contents_4");
const contents5 = document.querySelector(".section_3 .contents_5");


window.addEventListener("scroll", () => {
  if (window.scrollY < 2000) {
    contents1.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    contents2.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    contents3.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    contents4.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    contents5.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
  } else if (window.scrollY > 2000 && window.scrollY < 2200) {
    contents1.style.backgroundColor = "#6400FF";
    contents2.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    contents3.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    contents4.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    contents5.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
  } else if (window.scrollY > 2200 && window.scrollY < 2600) {
    contents1.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    contents2.style.backgroundColor = "#6400FF";
    contents3.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    contents4.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    contents5.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
  } else if (window.scrollY > 2600 && window.scrollY < 2800) {
    contents1.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    contents2.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    contents3.style.backgroundColor = "#6400FF";
    contents4.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    contents5.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
  } else if (window.scrollY > 2800 && window.scrollY < 3200) {
    contents1.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    contents2.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    contents3.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    contents4.style.backgroundColor = "#6400FF";
    contents5.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
  } else if (window.scrollY > 3200 && window.scrollY < 3400) {
    contents1.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    contents2.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    contents3.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    contents4.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    contents5.style.backgroundColor = "#6400FF";
  } else if (window.scrollY > 3400) {
    contents1.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    contents2.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    contents3.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    contents4.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    contents5.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
  }
})

const bg1 = document.querySelector(".section_3 .bg_1");
const bg2 = document.querySelector(".section_3 .bg_2");
const bg3 = document.querySelector(".section_3 .bg_3");
const bg4 = document.querySelector(".section_3 .bg_4");
const bg5 = document.querySelector(".section_3 .bg_5");

window.addEventListener("scroll", () => {
  if (window.scrollY < 2000) {
    bg1.style.opacity = 1;
    bg2.style.opacity = 0;
    bg3.style.opacity = 0;
    bg4.style.opacity = 0;
    bg5.style.opacity = 0;
  } else if (window.scrollY > 2000 && window.scrollY < 2200) {
    let per = (2200 - window.scrollY) / 200;
    bg1.style.opacity = per;
    bg2.style.opacity = 1 - per;
    bg3.style.opacity = 0;
    bg4.style.opacity = 0;
    bg5.style.opacity = 0;
  } else if (window.scrollY > 2200 && window.scrollY < 2600) {
    let per = (2600 - window.scrollY) / 400;
    bg1.style.opacity = 0;
    bg2.style.opacity = per;
    bg3.style.opacity = 1 - per;
    bg4.style.opacity = 0;
    bg5.style.opacity = 0;
  } else if (window.scrollY > 2600 && window.scrollY < 2800) {
    let per = (2800 - window.scrollY) / 200;
    bg1.style.opacity = 0;
    bg2.style.opacity = 0;
    bg3.style.opacity = per;
    bg4.style.opacity = 1 - per;
    bg5.style.opacity = 0;
  } else if (window.scrollY > 2800 && window.scrollY < 3200) {
    let per = (3200 - window.scrollY) / 400;
    bg1.style.opacity = 0;
    bg2.style.opacity = 0;
    bg3.style.opacity = 0;
    bg4.style.opacity = per;
    bg5.style.opacity = 1 - per;
  } else if (window.scrollY > 3200 && window.scrollY < 3400) {
    bg1.style.opacity = 0;
    bg2.style.opacity = 0;
    bg3.style.opacity = 0;
    bg4.style.opacity = 0;
    bg5.style.opacity = 1;
  } else if (window.scrollY > 3400) {
    bg1.style.opacity = 0;
    bg2.style.opacity = 0;
    bg3.style.opacity = 0;
    bg4.style.opacity = 0;
    bg5.style.opacity = 1;
  }
})