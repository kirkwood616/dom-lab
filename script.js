// #1 VENDING MACHINE

let totalAmount = 0;

document.getElementById("cola").addEventListener("click", function () {
  totalAmount += 2;
  document.getElementById("totalAmount").innerHTML = `$${totalAmount.toFixed(
    2
  )}`;
});

document.getElementById("peanuts").addEventListener("click", function () {
  totalAmount += 3;
  document.getElementById("totalAmount").innerHTML = `$${totalAmount.toFixed(
    2
  )}`;
});

document.getElementById("chocolate").addEventListener("click", function () {
  totalAmount += 4;
  document.getElementById("totalAmount").innerHTML = `$${totalAmount.toFixed(
    2
  )}`;
});

document.getElementById("gummies").addEventListener("click", function () {
  totalAmount += 6;
  document.getElementById("totalAmount").innerHTML = `$${totalAmount.toFixed(
    2
  )}`;
});

// #2 MAKE MONEY

const theForm = document.getElementById("the-form");
const howMany = document.getElementById("how-many");
const coins = document.getElementById("coins");
const coinContainer = document.getElementById("coinContainer");

theForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let howManyInput = howMany.value;
  let coinsInput = coins.value;

  for (let i = 0; i < howManyInput; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "coinDiv";
    newDiv.innerText = coinsInput;
    newDiv.classList.add(coinsInput);
    newDiv.addEventListener("click", () => {
      newDiv.remove();
    });

    coinContainer.appendChild(newDiv);
  }
});

// #3 LIGHT BULB

const lightbulb = document.getElementById("lightBulb");
const on = document.getElementById("on");
const off = document.getElementById("off");
const toggle = document.getElementById("toggle");
const end = document.getElementById("end");
let position = false;
const lightbulbOn = function () {
  lightbulb.style.backgroundColor = "yellow";
  lightbulb.style.color = "black";
  lightbulb.style.border = "2px solid black";
  position = true;
};
const lightbulbOff = function () {
  lightbulb.style.backgroundColor = "black";
  lightbulb.style.color = "white";
  position = false;
};

on.addEventListener("click", () => {
  lightbulbOn();
});

off.addEventListener("click", () => {
  lightbulbOff();
});

toggle.addEventListener("click", () => {
  if (position === true) {
    lightbulbOff();
  } else {
    lightbulbOn();
  }
});

end.addEventListener("click", () => {
  on.disabled = true;
  off.disabled = true;
  toggle.disabled = true;
  end.disabled = true;
  lightbulb.remove();
});
