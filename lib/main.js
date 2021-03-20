"use strict";

// It is always helpful to use comments in your code!

//Boiling Temp
var x = function x() {
  return document.getElementById("boiling-temp").innerHTML = 212;
};

setTimeout(x, 0);

//Freezing Temp
var y = function y() {
  return document.getElementById("freezing-temp").innerHTML = 32;
};

setTimeout(y, 0);

//Water Temp
var z = function z() {
  return document.getElementById("water-temp").innerHTML = '400';
};

setTimeout(z, 0);

//After 3000 milliseconds

var a = document.getElementById("water-temp");
var b = document.getElementById("boiling");
var c = document.getElementById("frozen");
var d = document.getElementById("good-temp");

setTimeout(function coldEnough() {
  if (Number(a.innerHTML) > 212) {
    b.classList.remove("hide");
  } else {}
}, 3000);

setTimeout(function coldEnough() {
  if (Number(a.innerHTML) < 32) {
    c.classList.remove("hide");
  } else {}
}, 3000);

setTimeout(function goodEnough() {
  if (Number(a.innerHTML) >= 33 && Number(a.innerHTML) <= 211) {
    d.classList.remove("hide");
  } else {}
}, 3000);

hotEnough();
coldEnough();
goodEnough();