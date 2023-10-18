const sidebar = document.getElementById("sidebar");
const btnshow = document.getElementById("btnshow");

btnshow.addEventListener("click", function () {
  sidebar.classList.toggle("-translate-x-full");
});
