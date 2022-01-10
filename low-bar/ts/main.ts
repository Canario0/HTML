function itemClick() {
  const list = document.querySelectorAll(".navbar__item");
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}

window.onload = () => {
  const list = document.querySelectorAll(".navbar__item");
  list.forEach((item) => item.addEventListener("click", itemClick));
};
