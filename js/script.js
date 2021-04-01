document.addEventListener("DOMContentLoaded", () => {
  //Navigation scroll
  window.addEventListener("click", () => {
    const anchors = document
      .querySelectorAll(".header__links")
      .forEach((link) => {
        link.addEventListener("click", function (e) {
          e.preventDefault();

          let href = this.getAttribute("href").substring(1);

          const scrollTarget = document.getElementById(href);

          const topOffset = document.querySelector(".header__nav").offsetHeight;

          const elementPosition = scrollTarget.getBoundingClientRect().top;
          const offsetPosition = elementPosition - topOffset;

          window.scrollBy({
            top: offsetPosition,
            behavior: "smooth",
          });
        });
      });
  });

  //Header scroll
  const hero = document.querySelector(".header"),
    header = document.querySelector(".header__nav");
  window.addEventListener("scroll", () => {
    let heroCenter = hero.offsetHeight / 2,
      scrollTop = window.scrollY;

    if (scrollTop >= heroCenter) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  });
});
