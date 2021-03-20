// It is always helpful to use comments in your code!

//Boiling Temp
const x = () => document.getElementById("boiling-temp").innerHTML = 212;

setTimeout(x, 0);

//Freezing Temp
const y = () => document.getElementById("freezing-temp").innerHTML = 32;

setTimeout(y, 0);

//Water Temp
let z = () => document.getElementById("water-temp").innerHTML = '400';

setTimeout(z, 0);


//After 3000 milliseconds

let a = document.getElementById("water-temp");
let b = document.getElementById("boiling");
let c = document.getElementById("frozen");
let d = document.getElementById("good-temp");

setTimeout(function coldEnough() {
    if (Number(a.innerHTML) > 212) {
      b.classList.remove("hide");
    } else {
    }
}, 3000);


setTimeout(function coldEnough() {
    if (Number(a.innerHTML) < 32) {
      c.classList.remove("hide");
    } else {
    }
}, 3000);


setTimeout(function goodEnough() {
    if (Number(a.innerHTML) >= 33 && Number(a.innerHTML) <= 211) {
      d.classList.remove("hide");
    } else {
    }
}, 3000);

hotEnough();
coldEnough();
goodEnough();
