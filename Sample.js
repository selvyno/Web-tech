console.log("Hello World");
console.log("Fibonnaci series");
let num=0;
let num1;
let start1=1;
console.log(0);
for(let i=0;i<22;i++)
{
    num1=num+start1;
    num=start1;
    start1=num1;
    console.log(num);
 }


    for(let i=1;i<20;i++)
    {
        if(i%15==0)
        {
            console.log("Fizzbuzz");
        }
        else if(i%3==0)
        {
            console.log("Fizz");
        }
        else if((i%5)==0)
        {
            console.log("Buzz");
        }
        
    }
