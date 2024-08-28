
let nums = [-9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

for (let i = 0; i < nums.length; i++) {
    let check = checkPrime(nums[i]);               //This fun will return true or undefined i.e false .It takes parameter as nums array elements one by one
    if (check) {
        console.log(`${nums[i]} is not Prime`);
    } else {
        console.log(`${nums[i]} is Prime`);
    }
}

function checkPrime(val) {
    if( val < 0 ) {
        val = val - 2*val
    } 
    let isPrime = val;                            //Store the the argument from the function in variable isPrime
    for (let x = 2; x < isPrime; x++) {            //Iterates from 2 - function arg - 1 i.e stroed in the variable isPrime
        if (isPrime % x == 0) {                     //Check if true then returns true if not then increments val of x++
            return true;
        }
    }
}