// It is always helpful to use comments in your code!

//Boiling Temp
const x = () => document.getElementById("boiling-temp").innerHTML = 212;

setTimeout(x, 0);

//Freezing Temp
const y = () => document.getElementById("freezing-temp").innerHTML = 32;

setTimeout(y, 0);

//Water Temp
const water_temp = 415
document.getElementById("water-temp").innerHTML = water_temp;


//After 3000 milliseconds


let hotEnough = () => {
  let waterTemp = document.getElementById("water-temp");
  let boilingTemp = document.getElementById("boiling");
  if (Number(waterTemp.innerHTML) > 212) {
    boilingTemp.classList.remove("hide");
  } else {
  }
}
setTimeout(hotEnough, 3000);

let coldEnough = () => {
  let waterTemp = document.getElementById("water-temp");
  let freezingTemp = document.getElementById("frozen");
  if (Number(waterTemp.innerHTML) < 32) {
    freezingTemp.classList.remove("hide");
  } else {
  }
}
setTimeout(coldEnough, 3000);

let goodEnough = () => {
  let waterTemp = document.getElementById("water-temp");
  let goodTemp = document.getElementById("good-temp");
  if (Number(waterTemp.innerHTML) >= 33 && Number(waterTemp.innerHTML) <= 211) {
    goodTemp.classList.remove("hide");
  } else {
  }
}
setTimeout(goodEnough, 3000);
