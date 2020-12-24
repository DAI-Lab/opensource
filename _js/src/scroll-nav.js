window.addEventListener("load", function () {
  const navbar = document.querySelector("nav.navbar");
  const navbarHeight = navbar.offsetHeight;

  function checkPosition() {
    const winnY = window.scrollY;
    const hasBgClass = navbar.classList.contains("bg-white");
    const scrolledThrough = winnY >= navbarHeight;
    if (scrolledThrough && !hasBgClass) {
      document.body.classList.add("nav-bg-white");
    } else {
      document.body.classList.remove("nav-bg-white");
    }
  }

  window.addEventListener("scroll", checkPosition);
  checkPosition();
});
