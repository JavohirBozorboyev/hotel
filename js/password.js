const parolInput = document.querySelectorAll(".parolInput");

// password show and block

for (let i = 0; i < parolInput.length; i++) {
  parolInput[i].parentElement.children[0].addEventListener(
    "click",
    function () {
      if (parolInput[i].type === "password") {
        parolInput[i].type = "text";
      } else {
        parolInput[i].type = "password";
      }
      parolInput[i].parentElement.children[0].classList.toggle("bx-show");
    }
  );
}
