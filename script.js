console.log("Columbus Cafe");

document.addEventListener("scroll", function () {
  const footer = document.querySelector(".footer");
  const footerPosition = footer.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (footerPosition < screenHeight) {
    footer.classList.add("visible");
  }
});
