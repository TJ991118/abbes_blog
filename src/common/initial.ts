window.addEventListener("resize", () => {
  console.log(window.innerHeight);
  document.documentElement.style.setProperty(
    "--app-height",
    `${window.innerHeight}px`
  );
});
document.documentElement.style.setProperty(
  "--app-height",
  `${window.innerHeight}px`
);
