alert("Input Number is Perfect Square or Not")                                        
let num=parseInt(prompt("Enter a Number"))

let count_Of_Factor=0;

for(let i=1;i<=num;i++)
{
    if(num%i===0) 
    count_Of_Factor++
}

if(count_Of_Factor%2===0)
{ 
    alert(num+ " is not perfect square")
}else{
    alert(num+ " is perfect square")
}