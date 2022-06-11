let modalSelSearchMehmonQosh = document.querySelector(
  ".modalSelSearchMehmonQosh"
);
let selIshJoyMehmonQosh = document.querySelectorAll(".selIshJoyMehmonQosh");

modalSelSearchMehmonQosh.addEventListener("keyup", (e) => {
  let value = e.target.value;
  if (value == "") {
    for (let i = 0; i < selIshJoyMehmonQosh.length; i++) {
      selIshJoyMehmonQosh[i].style.display = "block";
    }
  }
  selIshJoyMehmonQosh.forEach((item) => {
    if (item.innerHTML.toLowerCase().includes(value.toLowerCase())) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
