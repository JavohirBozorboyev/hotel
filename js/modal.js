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



let modalSearchTozalsh = document.querySelector(".modalSearchTozalsh");
let selNameIsh = document.querySelectorAll(".selNameIsh");
let modTozalshReset = document.querySelector(".modTozalshReset");

// tozolovda card
modalSearchTozalsh.addEventListener("keyup", (e) => {
  let value = e.target.value;
  if (value == "") {
    for (let i = 0; i < selNameIsh.length; i++) {
      selNameIsh[i].style.display = "block";
    }
  }
  selNameIsh.forEach((item) => {
    if (item.innerHTML.toLowerCase().includes(value.toLowerCase())) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

modTozalshReset.addEventListener("click", () => {
  selNameIsh.forEach((item) => {
    item.style.display = "block";
  });
});

// -----------------------------------band hona filter -------------------------------------

let modalSearchTozalshband = document.querySelector(".modalSearchTozalshband");
let selNameIshband = document.querySelectorAll(".selNameIshband");

modalSearchTozalshband.addEventListener("keyup", (e) => {
  let value = e.target.value;
  if (value == "") {
    for (let i = 0; i < selNameIshband.length; i++) {
      selNameIshband[i].style.display = "block";
    }
  }
  selNameIshband.forEach((item) => {
    if (item.innerHTML.toLowerCase().includes(value.toLowerCase())) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

// ----------------- Bosh hona band qilish ---------------------------------------------------

let selNameBand = document.querySelectorAll(".selNameBand");
let modalSearchBand = document.querySelector(".modalSearchBand");
let modQoshBand = document.querySelector(".modQoshBand");
let modQidBand = document.querySelector(".modQidBand");
let modQidBoxBand = document.querySelector(".modQidBoxBand");
let modQoshBoxBand = document.querySelector(".modQoshBoxBand");
let modQidResetBand = document.querySelector(".modQidResetBand");
let addSelModalBoxBand = document.querySelector(".addSelModalBoxBand");
let addIshModalBtnSelBand = document.querySelector(".addIshModalBtnSelBand");
let modalSelSearch5Band = document.querySelector(".modalSelSearch5Band");
let selIshJoyBand = document.querySelectorAll(".selIshJoyBand");

modalSearchBand.addEventListener("keyup", (e) => {
  let value = e.target.value;
  if (value == "") {
    for (let i = 0; i < selName.length; i++) {
      selNameBand[i].style.display = "block";
    }
  }
  selNameBand.forEach((item) => {
    if (item.innerHTML.toLowerCase().includes(value.toLowerCase())) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

modQoshBand.addEventListener("click", (e) => {
  modQidBand.classList.remove("btn-primary");
  modQoshBand.classList.remove("btn-outline-primary");
  modQidBand.classList.add("btn-outline-primary");
  modQoshBand.classList.add("btn-primary");

  modQoshBoxBand.style.display = "block";
  modQidBoxBand.style.display = "none";
});

modQidBand.addEventListener("click", (e) => {
  modQoshBand.classList.remove("btn-primary");
  modQidBand.classList.remove("btn-outline-primary");
  modQoshBand.classList.add("btn-outline-primary");
  modQidBand.classList.add("btn-primary");
  modQoshBoxBand.style.display = "none";
  modQidBoxBand.style.display = "block";
});

modQidResetBand.addEventListener("click", () => {
  selNameBand.forEach((item) => {
    item.style.display = "block";
  });
});

addIshModalBtnSelBand.addEventListener("click", () => {
  addSelModalBoxBand.style.display = "block";
});

modalSelSearch5Band.addEventListener("keyup", (e) => {
  let value = e.target.value;
  if (value == "") {
    for (let i = 0; i < selIshJoyBand.length; i++) {
      selIshJoyBand[i].style.display = "block";
    }
  }
  selIshJoyBand.forEach((item) => {
    if (item.innerHTML.toLowerCase().includes(value.toLowerCase())) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
