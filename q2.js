alert("Print all prime number")
let n=parseInt(prompt("Enter the Number "))
let primearray=[] 

for(i=2;i<=n;i++){ 
    let prime=true
    for(let j=2;j<=Math.sqrt(i);j++)
    { 
       if(i!=j)
       {
           if(i%j===0)
           {   
               prime=false;
           }
       }
    }
    

    if(prime)
    {
        primearray.push(i)  
    }
}
console.log(primearray);
