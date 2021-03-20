// It is always helpful to use comments in your code!

//Boiling Temp
const x = () => document.getElementById("boiling-temp").innerHTML = '212';

setTimeout(x, 0);

//Freezing Temp
const y = () => document.getElementById("freezing-temp").innerHTML = '32';

setTimeout(y, 0);

//Water Temp
let z = () => document.getElementById("water-temp").innerHTML = '12';

setTimeout(z, 0);


//After 3000 milliseconds

let a = document.getElementById("water-temp");
let b = document.getElementById("boiling");

setTimeout(function hotEnough() {
    if (a > '212') {
      b.classList.remove("hide");
    } else {
    }
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
