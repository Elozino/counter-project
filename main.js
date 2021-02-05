const counter = document.querySelector(".counter");
const decreaseCounter = document.querySelector(".decreaseCounter");
const increaseCounter = document.querySelector(".increaseCounter");

let count = 0;

decreaseCounter.addEventListener("click", decrease);
increaseCounter.addEventListener("click", increase);

function decrease(){
   count--;
   counter.textContent = count;

   if(counter.textContent < "0"){
      counter.style.color = "red";
   }
   else if(counter.textContent === "0"){
      counter.style.color = "white";
   }
}

function increase(){
   count++
   counter.textContent = count;
   if(counter.textContent > "0"){
      counter.style.color = "green";
   }
   else if(counter.textContent === "0"){
      counter.style.color = "white";
   }
}