alert("Factorial number")
let fact=1;
let n=parseInt(prompt("Enter a Number"));
if(n>-1){
  for(let i=n;i>0;i--){
    fact *= i;
  }
console.log(fact);
alert(fact)
}else{
  console.log("!!Opps Invalid Input");
  alert("!!Opps Invalid Input")

}
