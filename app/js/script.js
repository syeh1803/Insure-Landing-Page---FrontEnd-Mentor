const burger = document.querySelector("#burger");
const times = document.querySelector("#times");
const navList = document.querySelector("#nav-list");

burger.addEventListener("click", () => {
  navList.classList.toggle("show");
  burger.style.display = "none";
  times.style.display = "block";
});

times.addEventListener("click", () => {
  navList.classList.toggle("show");
  burger.style.display = "block";
  times.style.display = "none";
});
