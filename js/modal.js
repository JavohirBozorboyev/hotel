let selName = document.querySelectorAll(".selName");
let modalSearch = document.querySelector(".modalSearch");
let modQosh = document.querySelector(".modQosh");
let modQid = document.querySelector(".modQid");






// modalSearch.addEventListener("keyup", (e) => {
//   let value = e.target.value;
//   if (value == "") {
//     for (let i = 0; i < selName.length; i++) {
//       selName[i].style.display = "block";
//     }
//   }
//   selName.forEach((item) => {
//     if (item.innerHTML.toLowerCase().includes(value.toLowerCase())) {
//       item.style.display = "block";
//     } else {
//       item.style.display = "none";
//     }
//   });
// });









$(document).ready(function() {
    $('.js-example-basic-multiple').select2();
});