let selName = document.querySelectorAll(".selName");
let modalSearch = document.querySelector(".modalSearch");
let modQosh = document.querySelector(".modQosh");
let modQid = document.querySelector(".modQid");
let modQidBox = document.querySelector(".modQidBox");
let modQoshBox = document.querySelector(".modQoshBox");
let modQidReset = document.querySelector(".modQidReset");
let addSelModalBox = document.querySelector(".addSelModalBox");

let modalSelSearch5 = document.querySelector(".modalSelSearch5");
let selIshJoy = document.querySelectorAll(".selIshJoy");

modalSearch.addEventListener("keyup", (e) => {
  let value = e.target.value;
  if (value == "") {
    for (let i = 0; i < selName.length; i++) {
      selName[i].style.display = "block";
    }
  }
  selName.forEach((item) => {
    if (item.innerHTML.toLowerCase().includes(value.toLowerCase())) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

modalSelSearch5.addEventListener("keyup", (e) => {
  let value = e.target.value;
  if (value == "") {
    for (let i = 0; i < selIshJoy.length; i++) {
      selIshJoy[i].style.display = "block";
    }
  }
  selIshJoy.forEach((item) => {
    if (item.innerHTML.toLowerCase().includes(value.toLowerCase())) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

modQidReset.addEventListener("click", () => {
  selName.forEach((item) => {
    item.style.display = "block";
  });
});

modQosh.addEventListener("click", (e) => {
  modQid.classList.remove("btn-primary");
  modQosh.classList.remove("btn-outline-primary");
  modQid.classList.add("btn-outline-primary");
  modQosh.classList.add("btn-primary");

  modQoshBox.style.display = "block";
  modQidBox.style.display = "none";
});

modQid.addEventListener("click", (e) => {
  modQosh.classList.remove("btn-primary");
  modQid.classList.remove("btn-outline-primary");
  modQosh.classList.add("btn-outline-primary");
  modQid.classList.add("btn-primary");
  modQoshBox.style.display = "none";
  modQidBox.style.display = "block";
});



