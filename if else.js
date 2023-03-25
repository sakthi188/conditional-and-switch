function leapYear(year)
{
    if(year%4==0)
    return true;
    else
    return false;
}
if(leapYear(2000))
{
    console.log("Leap year");
}
else
{
    console.log("Not a leap year");
}
