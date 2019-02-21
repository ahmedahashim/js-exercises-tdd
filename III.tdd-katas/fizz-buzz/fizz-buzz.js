// function fizzbuzz(number){
   

//     for (i = 1; i <= 100; i++) {
//         // if the number is multplie by 3 & 5, write "FizzBuzz"
       
//         if (i % 15=== 0) {
//             return "FizzBuzz";
//         }
//         // if the number is multiple by 3, write "Fizz"
//         else if (i % 3 === 0) {
//            return"Fizz" ;
//         }
//         // if the number is multiple by 5, write "Buzz
//         else if (i % 5 === 0) {
//            return"Buzz";
//         }
//         // otherwise, write just the number
//         else {
//            return number
//         }
//     }
// }
function fizzBuzz(i) {
    
    if (i % 15 == 0)
        return 'FizzBuzz';
    else if (i % 5 == 0)
        return 'Buzz';
    else if (i % 3 == 0)
        return 'Fizz';
    else
        return i;
}

// Return an array
function fizzbuzz(number) {
    var array = [];
    for (var i = 1; i <= number; ++i) array.push(fizzBuzz(i));
    return array.toString();
}

module.exports = fizzbuzz;