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
var water_temp = 500;
document.getElementById("water-temp").innerHTML = water_temp;

//After 3000 milliseconds


var hotEnough = function hotEnough() {
  var waterTemp = document.getElementById("water-temp");
  var boilingTemp = document.getElementById("boiling");
  if (Number(waterTemp.innerHTML) > 212) {
    boilingTemp.classList.remove("hide");
  } else {}
};
setTimeout(hotEnough, 3000);

var coldEnough = function coldEnough() {
  var waterTemp = document.getElementById("water-temp");
  var freezingTemp = document.getElementById("frozen");
  if (Number(waterTemp.innerHTML) < 32) {
    freezingTemp.classList.remove("hide");
  } else {}
};
setTimeout(coldEnough, 3000);

var goodEnough = function goodEnough() {
  var waterTemp = document.getElementById("water-temp");
  var goodTemp = document.getElementById("good-temp");
  if (Number(waterTemp.innerHTML) >= 33 && Number(waterTemp.innerHTML) <= 211) {
    goodTemp.classList.remove("hide");
  } else {}
};
setTimeout(goodEnough, 3000);

//ALTERNATIVE WAY - DO NOT USE

// let a = document.getElementById("water-temp");
// let b = document.getElementById("boiling");
// let c = document.getElementById("frozen");
// let d = document.getElementById("good-temp");
//
// setTimeout(function coldEnough() {
//     if (Number(a.innerHTML) > 212) {
//       b.classList.remove("hide");
//     } else {
//     }
// }, 3000);
//
//
// setTimeout(function coldEnough() {
//     if (Number(a.innerHTML) < 32) {
//       c.classList.remove("hide");
//     } else {
//     }
// }, 3000);
//
//
// setTimeout(function goodEnough() {
//     if (Number(a.innerHTML) >= 33 && Number(a.innerHTML) <= 211) {
//       d.classList.remove("hide");
//     } else {
//     }
// }, 3000);
//
// hotEnough();
// coldEnough();
// goodEnough();