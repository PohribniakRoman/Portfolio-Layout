document.querySelectorAll(".nav__menu--item").forEach((element) => {
  element.addEventListener("click", (event) => {
    document.querySelectorAll(".nav__menu--item").forEach((item) => {
      item.classList.remove("active");
    });
    element.classList.add("active");
    document
      .querySelector(`#${event.target.innerText.toLowerCase()}`)
      .scrollIntoView({ block: "start", behavior: "smooth" });
  });
});






const heights = [0];
const res = [];
document.querySelectorAll("section").forEach((section, index) => {
  res[index] = heights.reduce((acc, cur) => {
    return acc + cur;
  });

  heights[index] = Number.parseInt(getComputedStyle(section).height);
});


function setColor(index) {
  document.querySelectorAll(".nav__menu--item").forEach((item) => {
    item.classList.remove("active");
  });
  document.querySelectorAll(".nav__menu--item")[index].classList.add("active");
}

window.addEventListener("scroll", () => {
  const scroll = res.filter(
    (element) =>
      element - window.pageYOffset + document.documentElement.clientHeight / 2 >
      0
  );
  setColor(res.indexOf(scroll[0]));
});

















window.addEventListener("scroll", () => {
  let scroll = (scrollTop =
    window.pageYOffset || document.documentElement.scrollTop);
  if (
    scroll >
    Number.parseInt(getComputedStyle(document.querySelector(".banner")).height)
  ) {
    document.querySelector(".nav").classList.add("fixed");
  } else {
    document.querySelector(".nav").classList.remove("fixed");
  }
});
