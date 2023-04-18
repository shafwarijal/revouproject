const navLinkEls = document.querySelectorAll(".menu");
const windowPathname = window.location.pathname;

navLinkEls.forEach((navLinkEl) => {
  const navLinkPathname = new URL(navLinkEl.href).pathname;

  if (windowPathname === navLinkPathname) {
    navLinkEl.classList.add("active");
  }
});
