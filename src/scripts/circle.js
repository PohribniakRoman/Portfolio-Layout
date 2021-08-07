document.querySelectorAll(".skills__circle").forEach((circle) => {
  circle.width = 140;
  circle.height = 140;
  const ctx = circle.getContext("2d");
  ctx.strokeStyle = "#ff5252";
  ctx.lineWidth = 10;

  ctx.arc(
    70,
    70,
    60,
    0,
    (Math.PI * 2 * Number.parseInt(circle.dataset.fill)) / 100
  );

  ctx.stroke();
});
