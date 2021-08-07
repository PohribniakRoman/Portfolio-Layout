let width = 0,
  index = 0;

document
  .querySelectorAll(".testimonials__slider--item")
  .forEach((item, index) => {
    if (index === 0) {
    } else {
      item.classList = "testimonials__slider--item none";
    }
  });

setInterval(() => {
  width++;
  document
    .querySelector("html")
    .style.setProperty("--width", `${(width * 2) / 10}%`);
  if (width === 500) {
    width = 0;
    document
      .querySelectorAll(".testimonials__slider--item")
      [index].classList.add("none");
    index = document.querySelectorAll(".testimonials__slider--item")[index + 1]
      ? index + 1
      : 0;
    document
      .querySelectorAll(".testimonials__slider--item")
      [index].classList.remove("none");
  }
}, 10);
