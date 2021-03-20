"use strict";

// It is always helpful to use comments in your code!

//Boiling Temp
var x = function x() {
  return document.getElementById("boiling-temp").innerHTML = '212';
};

setTimeout(x, 0);

//Freezing Temp
var y = function y() {
  return document.getElementById("freezing-temp").innerHTML = '32';
};

setTimeout(y, 0);

//Water Temp
var z = function z() {
  return document.getElementById("water-temp").innerHTML = '12';
};

setTimeout(z, 0);

//After 3000 milliseconds

var a = document.getElementById("water-temp");
var b = document.getElementById("boiling");

setTimeout(function hotEnough() {
  if (a > '212') {
    b.classList.remove("hide");
  } else {}
}, 3000);

hotEnough();

// const c = document.getElementById("frozen");
//
// function coldEnough() {
//     if (a < '32') {
//       c.classList.remove("hide");
//     } else {
//     }
// };
//
// coldEnough();