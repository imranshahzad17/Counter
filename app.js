let count = 0;
let count2 = document.querySelector("#count");
let Sum = document.querySelector(".ADD");
let Sub = document.querySelector(".SUB");

Sum.addEventListener("click",function(){
    count++;
   count2.innerHTML = count;
})
Sub.addEventListener("click",function(){
 if (count--) {
    count2.innerHTML = count;
 }else{ count=0}
})