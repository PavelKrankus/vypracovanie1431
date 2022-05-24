var a, b, op, calculate;

function calc() {
  a = parseFloat(document.querySelector("#value1").value);
  b = parseFloat(document.querySelector("#value2").value);
  op = document.querySelector("#operator").value;

  switch (operator.value) {
    case "add":
      add();
      break;

    case "sub":
      sub();
      break;

    case "div":
      div();
      break;

    case "mul":
      mul();
      break;
    case "mod":
      mod();
      break;
  }
  function add() {
    calculate = a + b;
  }
  function sub() {
    calculate = a - b;
  }
  function mul() {
    calculate = a * b;
  }
  function div() {
    calculate = a / b;
  }
  function mod() {
    calculate = a % b;
  }

  document.querySelector("#result").innerHTML = calculate;
  document.getElementById("result").value = calculate;
}
console.log(calculate);

function r() {
  document.getElementById("result").value = calculate;
}

let zoznam = JSON.parse(localStorage.getItem("zoznam"));

let num1 = document.getElementById("value1");
let num2 = document.getElementById("value2");
let result = document.getElementById("result");

if (zoznam == null) {
  zoznam = [];
}

let containerDiv = document.getElementById("container");

vykresliZoznam();

function vykresliZoznam() {
  containerDiv.innerHTML = "";

  for (let i = 0; i < zoznam.length; i++) {
    containerDiv.innerHTML += "<p>" + zoznam[i].result + "</p>";
    if (zoznam.length >= 6) {
      zoznam.splice(0, 1);
    }
  }
}

function klikloSaTlacitko(event) {
  event.preventDefault();

  zoznam.push({
    result: calculate,
  });

  value1.value = "";
  value2.value = "";
  result.calculate = "";

  vykresliZoznam();

  localStorage.setItem("zoznam", JSON.stringify(zoznam));

  console.log(zoznam);
}
