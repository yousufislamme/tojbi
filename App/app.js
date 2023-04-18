let count = 0;
let reset = 0;

// set icon 
const setIconIncrease = `<ion-icon name="add-outline"></ion-icon>`;


// decrease
document.getElementById("decrease").onclick = function () {
   count--;

   document.getElementById("count").innerHTML = count;
   console.log('count:', count);

   // condition jodi decrease kre tahle text change hbe...
   if (count <= 3) {
      document.getElementById("increase").innerHTML = "SubahanAllah" + setIconIncrease;
   } if (count == 0) {
      document.getElementById("increase").innerHTML = "Increase" + setIconIncrease;
   }


}

// Reset
document.getElementById("reset").onclick = function () {
   count == reset;
   document.getElementById("count").innerHTML = reset;
   document.getElementById("increase").innerHTML = "Increase" + setIconIncrease;
   console.log('reset:', reset);

}
// increase
document.getElementById("increase").onclick = function () {
   count++;
   document.getElementById("count").innerHTML = count;
   // condition set
   console.log('increase:', count);

   if (count >= 3) {
      document.getElementById("increase").innerHTML = "SubahanAllah" + setIconIncrease;
   } if (count >= 6) {
      document.getElementById("increase").innerHTML = "Al-Hamdulilla" + setIconIncrease;

   }


}
