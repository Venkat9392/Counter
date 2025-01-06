let count=0;
let h1=document.getElementById('box');
function incr(){
   count++;
   h1.textContent=count; 

}
function decr(){
    if(count <=0){
        alert("Value should not be less than zero")
    }
    else{
        count--;
      h1.textContent=count; 
    }
 
 }
 function reset(){
    count=0
    h1.textContent=count; 
 
 }