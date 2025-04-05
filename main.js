let panals = document.getElementsByClassName("panal");

for (let i = 0; i < panals.length; i++) {
  panals[i].addEventListener("click", function () {
    let panal = document.querySelector(".active");
    if (panal) {
      panal.classList.remove("active");
    }
    this.classList.add("active");
  });
}
