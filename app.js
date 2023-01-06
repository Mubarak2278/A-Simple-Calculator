const displayScreen = document.querySelector(".outputscreen");

function display(num) {
  displayScreen.value += num;
}

function calculate() {
  displayScreen.value = eval(displayScreen.value);
}

function Clear() {
  displayScreen.value = " ";
}
