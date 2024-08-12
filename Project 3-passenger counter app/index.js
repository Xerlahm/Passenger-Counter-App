//document.getElementById("counter-el").innerText = 5
let Count = 0

function increment(){
    Count++;
    document.getElementById("Count").innerText = Count;
}


function decrement(){
   if (Count > 0) {
    Count--;
    document.getElementById("Count").innerText = Count;
}
}