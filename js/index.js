const cardXona = document.querySelectorAll(".cardXona");
const searchA = document.querySelector(".searchA");
const FormSec = document.querySelector(".formSec");

FormSec.addEventListener("keyup", (e) => {
  e.preventDefault();
  let searchValue = searchA.value;

  cardXona.forEach((item) => {
    if (item.innerHTML.toLowerCase().includes(searchA.value.toLowerCase())) {
      item.style.display = "block";
      if (searchValue === "") {
        for (let i = 0; i < cardXona.length; i++) {
          if (i > cardXona.length) {
            cardXona[i].style.display = "none";
          }
        }
      }
    } else {
      item.style.display = "none";
    }
  });
});

// ------------------------------------------------------------------------

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

boshBtn.addEventListener("click", () => {
  cardXona.forEach((item) => {
    if (item.classList.value.includes("bg-success")) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
  oddiyBtn.addEventListener("click", () => {
    cardXona.forEach((item) => {
      if (
        item.classList.value.includes("bg-success") &&
        item.innerHTML.toLowerCase().includes("oddiy")
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
  poluBtn.addEventListener("click", () => {
    cardXona.forEach((item) => {
      if (
        item.classList.value.includes("bg-success") &&
        item.innerHTML.toLowerCase().includes("polu-lyuks")
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  lyuksBtn.addEventListener("click", () => {
    cardXona.forEach((item) => {
      if (
        item.classList.value.includes("bg-success") &&
        item.innerHTML.toLowerCase().includes("lyuks")
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  birBtn.addEventListener("click", () => {
    cardXona.forEach((item) => {
      if (
        item.classList.value.includes("bg-success") &&
        item.children[0].children[1].children.length == 1
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  ikkiBtn.addEventListener("click", () => {
    cardXona.forEach((item) => {
      if (
        item.classList.value.includes("bg-success") &&
        item.children[0].children[1].children.length == 2
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  uchBtn.addEventListener("click", () => {
    cardXona.forEach((item) => {
      if (
        item.classList.value.includes("bg-success") &&
        item.children[0].children[1].children.length == 3
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

banEtBtn.addEventListener("click", () => {
  cardXona.forEach((item) => {
    if (item.classList.value.includes("bg-secondary")) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
  oddiyBtn.addEventListener("click", () => {
    cardXona.forEach((item) => {
      if (
        item.classList.value.includes("bg-secondary") &&
        item.innerHTML.toLowerCase().includes("oddiy")
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
  poluBtn.addEventListener("click", () => {
    cardXona.forEach((item) => {
      if (
        item.classList.value.includes("bg-secondary") &&
        item.innerHTML.toLowerCase().includes("polu-lyuks")
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  lyuksBtn.addEventListener("click", () => {
    cardXona.forEach((item) => {
      if (
        item.classList.value.includes("bg-secondary") &&
        item.innerHTML.toLowerCase().includes("lyuks")
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  birBtn.addEventListener("click", () => {
    cardXona.forEach((item) => {
      if (
        item.classList.value.includes("bg-secondary") &&
        item.children[0].children[1].children.length == 1
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  ikkiBtn.addEventListener("click", () => {
    cardXona.forEach((item) => {
      if (
        item.classList.value.includes("bg-secondary") &&
        item.children[0].children[1].children.length == 2
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  uchBtn.addEventListener("click", () => {
    cardXona.forEach((item) => {
      if (
        item.classList.value.includes("bg-secondary") &&
        item.children[0].children[1].children.length == 3
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

bandBtn.addEventListener("click", () => {
  cardXona.forEach((item) => {
    if (item.classList.value.includes("bg-danger")) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
  oddiyBtn.addEventListener("click", () => {
    cardXona.forEach((item) => {
      if (
        item.classList.value.includes("bg-danger") &&
        item.innerHTML.toLowerCase().includes("oddiy")
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
  poluBtn.addEventListener("click", () => {
    cardXona.forEach((item) => {
      if (
        item.classList.value.includes("bg-danger") &&
        item.innerHTML.toLowerCase().includes("polu-lyuks")
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  lyuksBtn.addEventListener("click", () => {
    cardXona.forEach((item) => {
      if (
        item.classList.value.includes("bg-danger") &&
        item.innerHTML.toLowerCase().includes("lyuks")
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  birBtn.addEventListener("click", () => {
    cardXona.forEach((item) => {
      if (
        item.classList.value.includes("bg-danger") &&
        item.children[0].children[1].children.length == 1
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  ikkiBtn.addEventListener("click", () => {
    cardXona.forEach((item) => {
      if (
        item.classList.value.includes("bg-danger") &&
        item.children[0].children[1].children.length == 2
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  uchBtn.addEventListener("click", () => {
    cardXona.forEach((item) => {
      if (
        item.classList.value.includes("bg-danger") &&
        item.children[0].children[1].children.length == 3
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

tozBtn.addEventListener("click", () => {
  cardXona.forEach((item) => {
    if (item.classList.value.includes("bg-warning")) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
  oddiyBtn.addEventListener("click", () => {
    cardXona.forEach((item) => {
      if (
        item.classList.value.includes("bg-warning") &&
        item.innerHTML.toLowerCase().includes("oddiy")
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
  poluBtn.addEventListener("click", () => {
    cardXona.forEach((item) => {
      if (
        item.classList.value.includes("bg-warning") &&
        item.innerHTML.toLowerCase().includes("polu-lyuks")
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  lyuksBtn.addEventListener("click", () => {
    cardXona.forEach((item) => {
      if (
        item.classList.value.includes("bg-warning") &&
        item.innerHTML.toLowerCase().includes("lyuks")
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  birBtn.addEventListener("click", () => {
    cardXona.forEach((item) => {
      if (
        item.classList.value.includes("bg-warning") &&
        item.children[0].children[1].children.length == 1
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  ikkiBtn.addEventListener("click", () => {
    cardXona.forEach((item) => {
      if (
        item.classList.value.includes("bg-warning") &&
        item.children[0].children[1].children.length == 2
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  uchBtn.addEventListener("click", () => {
    cardXona.forEach((item) => {
      if (
        item.classList.value.includes("bg-warning") &&
        item.children[0].children[1].children.length == 3
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

tamBtn.addEventListener("click", () => {
  cardXona.forEach((item) => {
    if (item.classList.value.includes("bg-dark")) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
  oddiyBtn.addEventListener("click", () => {
    cardXona.forEach((item) => {
      if (
        item.classList.value.includes("bg-dark") &&
        item.innerHTML.toLowerCase().includes("oddiy")
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
  poluBtn.addEventListener("click", () => {
    cardXona.forEach((item) => {
      if (
        item.classList.value.includes("bg-dark") &&
        item.innerHTML.toLowerCase().includes("polu-lyuks")
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  lyuksBtn.addEventListener("click", () => {
    cardXona.forEach((item) => {
      if (
        item.classList.value.includes("bg-dark") &&
        item.innerHTML.toLowerCase().includes("lyuks")
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  birBtn.addEventListener("click", () => {
    cardXona.forEach((item) => {
      if (
        item.classList.value.includes("bg-dark") &&
        item.children[0].children[1].children.length == 1
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  ikkiBtn.addEventListener("click", () => {
    cardXona.forEach((item) => {
      if (
        item.classList.value.includes("bg-dark") &&
        item.children[0].children[1].children.length == 2
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  uchBtn.addEventListener("click", () => {
    cardXona.forEach((item) => {
      if (
        item.classList.value.includes("bg-dark") &&
        item.children[0].children[1].children.length == 3
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

oddiyBtn.addEventListener("click", () => {
  cardXona.forEach((item) => {
    if (item.innerHTML.toLowerCase().includes("oddiy")) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

poluBtn.addEventListener("click", () => {
  cardXona.forEach((item) => {
    if (item.innerHTML.toLowerCase().includes("polu-lyuks")) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

lyuksBtn.addEventListener("click", () => {
  cardXona.forEach((item) => {
    if (item.innerHTML.toLowerCase().includes("lyuks")) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

birBtn.addEventListener("click", () => {
  cardXona.forEach((item) => {
    let value = item.children[0].children[1].children.length;

    if (value == 1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

ikkiBtn.addEventListener("click", () => {
  cardXona.forEach((item) => {
    let value = item.children[0].children[1].children.length;
    if (value == 2) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

uchBtn.addEventListener("click", () => {
  cardXona.forEach((item) => {
    let value = item.children[0].children[1].children.length;
    if (value == 3) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

hamBtn.addEventListener("click", () => {
  for (let i = 0; i < cardXona.length; i++) {
    cardXona[i].style.display = "block";
  }
  oddiyBtn.addEventListener("click", () => {
    cardXona.forEach((item) => {
      if (item.innerHTML.toLowerCase().includes("oddiy")) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
  poluBtn.addEventListener("click", () => {
    cardXona.forEach((item) => {
      if (item.innerHTML.toLowerCase().includes("polu-lyuks")) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  lyuksBtn.addEventListener("click", () => {
    cardXona.forEach((item) => {
      if (item.innerHTML.toLowerCase().includes("lyuks")) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  birBtn.addEventListener("click", () => {
    cardXona.forEach((item) => {
      let value = item.children[1].children[0].children[1].innerHTML;
      if (value.includes("1")) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  ikkiBtn.addEventListener("click", () => {
    cardXona.forEach((item) => {
      let value = item.children[1].children[0].children[1].innerHTML;
      if (value.includes("2")) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  uchBtn.addEventListener("click", () => {
    cardXona.forEach((item) => {
      let value = item.children[1].children[0].children[1].innerHTML;
      if (value.includes("3")) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
