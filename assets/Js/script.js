const gamePyramid = document.querySelector(".game-pyramid");
function createRow(ballCount) {
  const row = document.createElement("div");
  row.classList.add("row");
  for (let i = 0; i < ballCount; i++) {
    const ball = document.createElement("div");
    ball.classList.add("ball");
    row.appendChild(ball);
  }
  return row;
}
function buildPyramid(rowCount) {
  for (let i = 1; i <= rowCount; i++) {
    const row = createRow(i);
    gamePyramid.appendChild(row);
  }
}
buildPyramid(16);

// -------------------------------
function populateCountTable(array, iterations) {
  const countTable = document.querySelector(".count-table");
  countTable.innerHTML = "";
  for (let i = 0; i < iterations; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    array.forEach((value) => {
      const span1 = document.createElement("span");
      span1.textContent = value;
      row.appendChild(span1);
    });

    countTable.appendChild(row);
  }
}
const array = [
  18, 3.2, 1.6, 1.3, 1.2, 1.1, 1, 0.5, 1, 1.1, 1.2, 1.3, 1.6, 3.2, 18,
];
const iterations = 3;
populateCountTable(array, iterations);

jQuery(document).ready(function ($) {
  $(".offers-slider .slider-container").slick({
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
  });
});
