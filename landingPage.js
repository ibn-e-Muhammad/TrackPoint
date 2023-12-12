let menu = document.querySelector("#menu-icon");
let navelist = document.querySelector(".navelist");
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navelist.classList.toggle("open");
};

const sr = ScrollReveal({
  distance: "70px",
  duration: 3000,
  delay: 450,
  reset: true,
});
sr.reveal(".hero-text", { delay: 200, origin: "top" });
sr.reveal(".hero-img", { delay: 450, origin: "right" });
sr.reveal(".icons", { delay: 550, origin: "left" });
