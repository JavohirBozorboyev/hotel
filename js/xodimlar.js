$(document).ready(function () {
  $("#example").DataTable();
});

let tableTr = document.querySelectorAll(".tableTr");
const FormSec = document.querySelector(".formSec");
let searchA = document.querySelector(".searchA");
const pagination = document.querySelector(".pagination");

// search function and table pagination

FormSec.addEventListener("keyup", (e) => {
  e.preventDefault();
  let search = e.target.value.toLowerCase();
  tableTr.forEach((item) => {
    if (item.innerHTML.toLowerCase().includes(search)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
  if (search == "") {
    for (let i = 0; i < tableTr.length; i++) {
      if (i > 9) {
        tableTr[i].style.display = "none";
      }
    }
  }
});

// pagination add

let paginationlength = Math.ceil(tableTr.length / 10);
let pagNum = document.querySelectorAll(".pagNum");

for (let i = 1; i <= paginationlength; i++) {
  pagination.innerHTML += `<button type="button" class="btn btn-primary btn-sm m-1 pagNum">${i}</button>`;

  for (let i = 0; i < tableTr.length; i++) {
    if (i > 9) {
      tableTr[i].style.display = "none";
    }
  }
  for (let i = 0; i < pagination.children.length; i++) {
    pagination.children[i].addEventListener("click", (e) => {
      e.preventDefault();
      let pag = e.target.innerText;
      let start = (pag - 1) * 10;
      let end = pag * 10;
      for (let i = 0; i < tableTr.length; i++) {
        if (i >= start && i < end) {
          tableTr[i].style.display = "";
        } else {
          tableTr[i].style.display = "none";
        }
      }
    });
  }
}
