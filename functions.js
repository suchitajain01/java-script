const hello =() =>
{
    console.log("hey, how are you, ")
    return "hi";
}

function onePlusAvg(x,y)
{
    return 1 + (x+y)/2;
}

const sum = (p,q) =>
{
    return p+q;
}

let a = 1;
let b = 2;
let c = 3;
let v = hello();

console.log(v)
console.log("one plus average of a and b is", onePlusAvg(a,b))
console.log(sum(9,7)) 
