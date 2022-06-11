const toastLiveExample = document.getElementById("liveToast");

// onload page toast block

window.onload = (event) => {
  const toast = new bootstrap.Toast(toastLiveExample);

  toast.show();
};
