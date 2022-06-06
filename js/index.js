const cardXona = document.querySelectorAll(".cardXona");
const searchA = document.querySelector(".searchA");
const FormSec = document.querySelector(".formSec");
const jadval = document.querySelector(".jadval");
const kartochka = document.querySelector(".kartochka");
const cardSection = document.querySelector(".cardSection");
const tableSection = document.querySelector(".tableSection");

jadval.addEventListener("click", () => {
  tableSection.classList.remove("d-none");
  cardSection.classList.add("d-none");
  jadval.classList.remove("btn-outline-primary");
  jadval.classList.add("btn-primary");
  kartochka.classList.remove("btn-primary");
  kartochka.classList.add("btn-outline-primary");
});
kartochka.addEventListener("click", () => {
  tableSection.classList.add("d-none");
  cardSection.classList.remove("d-none");
  jadval.classList.remove("btn-primary");
  jadval.classList.add("btn-outline-primary");
  kartochka.classList.remove("btn-outline-primary");
  kartochka.classList.add("btn-primary");
});

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

  // table search
  tableTr.forEach((item) => {
    if (item.innerHTML.toLowerCase().includes(searchValue.toLowerCase())) {
      item.style.display = "";
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
const tableTr = document.querySelectorAll(".tableTr");
const turi = document.querySelectorAll(".turi");
const home = document.querySelectorAll(".home");
// turi.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     for (let key of turi) {
//       key.classList.remove("btn-dark");
//       key.classList.add("btn-outline-secondary");
//     }
//     e.target.classList.remove("btn-outline-secondary");
//     e.target.classList.add("btn-dark");
//   });
// });
// let data, data1;
// home.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     console.log(e.target.textContent);
//   });
// });

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
    uchBtn.addEventListener("click", () => {
      cardXona.forEach((item) => {
        if (
          item.classList.value.includes("bg-success") &&
          item.innerHTML.toLowerCase().includes("oddiy") &&
          item.children[0].children[1].children.length == 3
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
          item.innerHTML.toLowerCase().includes("oddiy") &&
          item.children[0].children[1].children.length == 2
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
          item.innerHTML.toLowerCase().includes("oddiy") &&
          item.children[0].children[1].children.length == 1
        ) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
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
    uchBtn.addEventListener("click", () => {
      cardXona.forEach((item) => {
        if (
          item.classList.value.includes("bg-success") &&
          item.innerHTML.toLowerCase().includes("polu-lyuks") &&
          item.children[0].children[1].children.length == 3
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
          item.innerHTML.toLowerCase().includes("polu-lyuks") &&
          item.children[0].children[1].children.length == 2
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
          item.innerHTML.toLowerCase().includes("polu-lyuks") &&
          item.children[0].children[1].children.length == 1
        ) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
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
    uchBtn.addEventListener("click", () => {
      cardXona.forEach((item) => {
        if (
          item.classList.value.includes("bg-success") &&
          item.innerHTML.toLowerCase().includes("lyuks") &&
          item.children[0].children[1].children.length == 3
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
          item.innerHTML.toLowerCase().includes("lyuks") &&
          item.children[0].children[1].children.length == 2
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
          item.innerHTML.toLowerCase().includes("lyuks") &&
          item.children[0].children[1].children.length == 1
        ) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
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

  // tabel
  tableTr.forEach((item) => {
    if (item.classList.value.includes("bosh")) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
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
    uchBtn.addEventListener("click", () => {
      cardXona.forEach((item) => {
        if (
          item.classList.value.includes("bg-secondary") &&
          item.innerHTML.toLowerCase().includes("oddiy") &&
          item.children[0].children[1].children.length == 3
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
          item.innerHTML.toLowerCase().includes("oddiy") &&
          item.children[0].children[1].children.length == 2
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
          item.innerHTML.toLowerCase().includes("oddiy") &&
          item.children[0].children[1].children.length == 1
        ) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
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
    uchBtn.addEventListener("click", () => {
      cardXona.forEach((item) => {
        if (
          item.classList.value.includes("bg-secondary") &&
          item.innerHTML.toLowerCase().includes("polu-lyuks") &&
          item.children[0].children[1].children.length == 3
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
          item.innerHTML.toLowerCase().includes("polu-lyuks") &&
          item.children[0].children[1].children.length == 2
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
          item.innerHTML.toLowerCase().includes("polu-lyuks") &&
          item.children[0].children[1].children.length == 1
        ) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
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
    uchBtn.addEventListener("click", () => {
      cardXona.forEach((item) => {
        if (
          item.classList.value.includes("bg-secondary") &&
          item.innerHTML.toLowerCase().includes("lyuks") &&
          item.children[0].children[1].children.length == 3
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
          item.innerHTML.toLowerCase().includes("lyuks") &&
          item.children[0].children[1].children.length == 2
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
          item.innerHTML.toLowerCase().includes("lyuks") &&
          item.children[0].children[1].children.length == 1
        ) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
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

  // table filter
  tableTr.forEach((item) => {
    if (item.classList.value.includes("bandEt")) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
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
    uchBtn.addEventListener("click", () => {
      cardXona.forEach((item) => {
        if (
          item.classList.value.includes("bg-danger") &&
          item.innerHTML.toLowerCase().includes("oddiy") &&
          item.children[0].children[1].children.length == 3
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
          item.innerHTML.toLowerCase().includes("oddiy") &&
          item.children[0].children[1].children.length == 2
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
          item.innerHTML.toLowerCase().includes("oddiy") &&
          item.children[0].children[1].children.length == 1
        ) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
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
    uchBtn.addEventListener("click", () => {
      cardXona.forEach((item) => {
        if (
          item.classList.value.includes("bg-danger") &&
          item.innerHTML.toLowerCase().includes("polu-lyuks") &&
          item.children[0].children[1].children.length == 3
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
          item.innerHTML.toLowerCase().includes("polu-lyuks") &&
          item.children[0].children[1].children.length == 2
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
          item.innerHTML.toLowerCase().includes("polu-lyuks") &&
          item.children[0].children[1].children.length == 1
        ) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
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
    uchBtn.addEventListener("click", () => {
      cardXona.forEach((item) => {
        if (
          item.classList.value.includes("bg-danger") &&
          item.innerHTML.toLowerCase().includes("lyuks") &&
          item.children[0].children[1].children.length == 3
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
          item.innerHTML.toLowerCase().includes("lyuks") &&
          item.children[0].children[1].children.length == 2
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
          item.innerHTML.toLowerCase().includes("lyuks") &&
          item.children[0].children[1].children.length == 1
        ) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
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
  // table filter
  tableTr.forEach((item) => {
    if (item.classList.value.includes("bandXona")) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
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
    uchBtn.addEventListener("click", () => {
      cardXona.forEach((item) => {
        if (
          item.classList.value.includes("bg-warning") &&
          item.innerHTML.toLowerCase().includes("oddiy") &&
          item.children[0].children[1].children.length == 3
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
          item.innerHTML.toLowerCase().includes("oddiy") &&
          item.children[0].children[1].children.length == 2
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
          item.innerHTML.toLowerCase().includes("oddiy") &&
          item.children[0].children[1].children.length == 1
        ) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
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
    uchBtn.addEventListener("click", () => {
      cardXona.forEach((item) => {
        if (
          item.classList.value.includes("bg-warning") &&
          item.innerHTML.toLowerCase().includes("polu-lyuks") &&
          item.children[0].children[1].children.length == 3
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
          item.innerHTML.toLowerCase().includes("polu-lyuks") &&
          item.children[0].children[1].children.length == 2
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
          item.innerHTML.toLowerCase().includes("polu-lyuks") &&
          item.children[0].children[1].children.length == 1
        ) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
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
    uchBtn.addEventListener("click", () => {
      cardXona.forEach((item) => {
        if (
          item.classList.value.includes("bg-warning") &&
          item.innerHTML.toLowerCase().includes("lyuks") &&
          item.children[0].children[1].children.length == 3
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
          item.innerHTML.toLowerCase().includes("lyuks") &&
          item.children[0].children[1].children.length == 2
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
          item.innerHTML.toLowerCase().includes("lyuks") &&
          item.children[0].children[1].children.length == 1
        ) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
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
  // table filter
  tableTr.forEach((item) => {
    if (item.classList.value.includes("tozalash")) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
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
    uchBtn.addEventListener("click", () => {
      cardXona.forEach((item) => {
        if (
          item.classList.value.includes("bg-dark") &&
          item.innerHTML.toLowerCase().includes("oddiy") &&
          item.children[0].children[1].children.length == 3
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
          item.innerHTML.toLowerCase().includes("oddiy") &&
          item.children[0].children[1].children.length == 2
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
          item.innerHTML.toLowerCase().includes("oddiy") &&
          item.children[0].children[1].children.length == 1
        ) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
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
    uchBtn.addEventListener("click", () => {
      cardXona.forEach((item) => {
        if (
          item.classList.value.includes("bg-dark") &&
          item.innerHTML.toLowerCase().includes("polu-lyuks") &&
          item.children[0].children[1].children.length == 3
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
          item.innerHTML.toLowerCase().includes("polu-lyuks") &&
          item.children[0].children[1].children.length == 2
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
          item.innerHTML.toLowerCase().includes("polu-lyuks") &&
          item.children[0].children[1].children.length == 1
        ) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
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
    uchBtn.addEventListener("click", () => {
      cardXona.forEach((item) => {
        if (
          item.classList.value.includes("bg-dark") &&
          item.innerHTML.toLowerCase().includes("lyuks") &&
          item.children[0].children[1].children.length == 3
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
          item.innerHTML.toLowerCase().includes("lyuks") &&
          item.children[0].children[1].children.length == 2
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
          item.innerHTML.toLowerCase().includes("lyuks") &&
          item.children[0].children[1].children.length == 1
        ) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
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
  // table filter

  tableTr.forEach((item) => {
    if (item.classList.value.includes("remont")) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
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
  uchBtn.addEventListener("click", () => {
    cardXona.forEach((item) => {
      if (
        item.innerHTML.toLowerCase().includes("oddiy") &&
        item.children[0].children[1].children.length == 3
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
        item.innerHTML.toLowerCase().includes("oddiy") &&
        item.children[0].children[1].children.length == 2
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
        item.innerHTML.toLowerCase().includes("oddiy") &&
        item.children[0].children[1].children.length == 1
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  // table filter
  tableTr.forEach((item) => {
    if (item.children[4].innerHTML.includes("Oddiy")) {
      item.style.display = "";
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
  uchBtn.addEventListener("click", () => {
    cardXona.forEach((item) => {
      if (
        item.innerHTML.toLowerCase().includes("polu-lyuks") &&
        item.children[0].children[1].children.length == 3
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
        item.innerHTML.toLowerCase().includes("polu-lyuks") &&
        item.children[0].children[1].children.length == 2
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
        item.innerHTML.toLowerCase().includes("polu-lyuks") &&
        item.children[0].children[1].children.length == 1
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
  // table filter
  tableTr.forEach((item) => {
    if (item.children[4].innerHTML.includes("Polu-Lyuks")) {
      item.style.display = "";
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
  uchBtn.addEventListener("click", () => {
    cardXona.forEach((item) => {
      if (
        item.innerHTML.toLowerCase().includes("lyuks") &&
        item.children[0].children[1].children.length == 3
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
        item.innerHTML.toLowerCase().includes("lyuks") &&
        item.children[0].children[1].children.length == 2
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
        item.innerHTML.toLowerCase().includes("lyuks") &&
        item.children[0].children[1].children.length == 1
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
  // table filter
  tableTr.forEach((item) => {
    if (item.children[4].innerHTML.includes("Lyuks")) {
      item.style.display = "";
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
  // table filter
  tableTr.forEach((item) => {
    if (item.children[2].children[0].children.length === 1) {
      item.style.display = "";
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
  // table filter
  tableTr.forEach((item) => {
    if (item.children[2].children[0].children.length === 2) {
      item.style.display = "";
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
  // table filter
  tableTr.forEach((item) => {
    if (item.children[2].children[0].children.length === 3) {
      item.style.display = "";
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

  // table filer
  tableTr.forEach((item) => {
    item.style.display = "";
  });
});

// -------------------------------------- Modal Sellect filter ---------------------------------------------------------

let selName = document.querySelectorAll(".selName");
let modalSearch = document.querySelector(".modalSearch");
let modQosh = document.querySelector(".modQosh");
let modQid = document.querySelector(".modQid");
let modQidBox = document.querySelector(".modQidBox");
let modQoshBox = document.querySelector(".modQoshBox");
let modQidReset = document.querySelector(".modQidReset");

// bo'sh hona bron qilish
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

// ---------------------------------------------------------------------------------------------------------------------

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
