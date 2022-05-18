let keyPressCount = 0;
function getKeyPress() {
  let doc = document.getElementById("cardDate");
  doc.addEventListener("keypress", (event) => {
    keyPressCount += 1;
    if (keyPressCount == 1) {
      setTimeout(() => {
        doc.value += '/'
      }, 1);
    }
  }, false);
}

function enableSubmit() {
  let inputs = document.getElementsByClassName('req');
  let btn = document.querySelector('input[type="submit"]');
  let isValid = true;

  for (var i = 0; i < inputs.length; i++) {
    let changedInput = inputs[i];
    if (changedInput.value.trim() === "" || changedInput.value === null) {
      isValid = false;
      break;
    }
  }
  btn.disabled = !isValid;
  if (isValid) {
    btn.value = "Add Credit Card";
  }
}
