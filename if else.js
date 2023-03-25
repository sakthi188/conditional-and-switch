function testElseIf(val)
{
    if(val>10)
    return "Greater than  10";
    else if(val<5)
    return "Smaller than 5";
    else
    return "Between 5 and 10";
}
console.log(testElseIf(8));
console.log(testElseIf(3));


function testSize(num)
{
    if(num<5)
    return "tiny";
    else if(num<10)
    return "small";
    else if(num<15)
    return "medium";
    else if(num<20)
    return "large";
    else
    return "huge";
}
console.log(testSize(20));
 console.log(testSize(13));