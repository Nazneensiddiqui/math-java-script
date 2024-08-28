//.........REST PARAMETER..........................
// three dot se represent hota he as a parameter or ye ek array hota he

function addition(...num){
    console.log(num);
    var sum = 0;
    for(let i=0; i<num.length; i++)
    {
        sum +=num[i];
    }
    return sum;
}
console.log(addition(3,5,8,9,7,))
console.log(addition(11,12))
console.log(addition(3,5,8,9,7,10,18,75))