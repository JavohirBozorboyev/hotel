const tableTr = document.querySelectorAll(".tableTr");
const searchA = document.querySelector(".searchA");
const FormSec = document.querySelector(".formSec");

FormSec.addEventListener("keyup", (e) => {
  let input = e.target.value;
  tableTr.forEach((item) => {
    if (item.innerHTML.toLowerCase().includes(input.toLowerCase())) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});

const hamBtn = document.querySelector(".hamBtn");
const boshBtn = document.querySelector(".boshBtn");
const banEtBtn = document.querySelector(".banEtBtn");
const bandBtn = document.querySelector(".bandBtn");
const tozBtn = document.querySelector(".tozBtn");
const tamBtn = document.querySelector(".tamBtn");

const oddiyBtn = document.querySelector(".oddiyBtn");
const poluBtn = document.querySelector(".poluBtn");
const lyuksBtn = document.querySelector(".lyuksBtn");

const birBtn = document.querySelector(".birBtn");
const ikkiBtn = document.querySelector(".ikkiBtn");
const uchBtn = document.querySelector(".uchBtn");

hamBtn.addEventListener("click", () => {
  tableTr.forEach((item) => {
    item.style.display = "";
  });
});

boshBtn.addEventListener("click", () => {
  tableTr.forEach((item) => {
    if (item.classList.value.includes("bosh")) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});

banEtBtn.addEventListener("click", () => {
  tableTr.forEach((item) => {
    if (item.classList.value.includes("bandEt")) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});

bandBtn.addEventListener("click", () => {
  tableTr.forEach((item) => {
    if (item.classList.value.includes("bandXona")) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});

tozBtn.addEventListener("click", () => {
  tableTr.forEach((item) => {
    if (item.classList.value.includes("tozalash")) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});

tamBtn.addEventListener("click", () => {
  tableTr.forEach((item) => {
    if (item.classList.value.includes("remont")) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});

oddiyBtn.addEventListener("click", () => {
  tableTr.forEach((item) => {
    if (item.children[4].innerHTML.includes("Oddiy")) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});

poluBtn.addEventListener("click", () => {
  tableTr.forEach((item) => {
    if (item.children[4].innerHTML.includes("Polu-Lyuks")) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});

lyuksBtn.addEventListener("click", () => {
  tableTr.forEach((item) => {
    if (item.children[4].innerHTML.includes("Lyuks")) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});

uchBtn.addEventListener("click", () => {
  tableTr.forEach((item) => {
    if (item.children[2].children[0].children.length === 3) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});

ikkiBtn.addEventListener("click", () => {
  tableTr.forEach((item) => {
    if (item.children[2].children[0].children.length === 2) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});

birBtn.addEventListener("click", () => {
  tableTr.forEach((item) => {
    if (item.children[2].children[0].children.length === 1) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});
