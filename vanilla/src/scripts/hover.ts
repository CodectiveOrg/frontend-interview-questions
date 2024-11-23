const heading = document.querySelector("h1")!;

// heading.addEventListener("mouseenter", () => {
//   heading.style.color = "red";
// });
//
// heading.addEventListener("mouseleave", () => {
//   heading.style.color = "inherit";
// });

heading.addEventListener("mouseover", () => {
  heading.style.color = "red";
});

heading.addEventListener("mouseout", () => {
  heading.style.color = "inherit";
});
