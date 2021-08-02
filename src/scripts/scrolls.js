document.getElementById("banner-scroll").addEventListener("click", () => {
  document
    .querySelector(".intro")
    .scrollIntoView({ block: "center", behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  let scroll = (scrollTop =
    window.pageYOffset || document.documentElement.scrollTop);

  if (scroll > 150) {
    document.getElementById("scroll-top").classList.remove("none");
  } else {
    document.getElementById("scroll-top").classList.add("none");
  }
});

document.getElementById("scroll-top").addEventListener("click", () => {
  document
    .querySelector(".banner")
    .scrollIntoView({ block: "center", behavior: "smooth" });
});
