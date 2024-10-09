// FizzBuzz Exercise
// Write a program that prints all the numbers from 1 to 100. For numbers divisible by 3, print Fizz, and numbers divisible by 5 (not 3), print Buzz instead.
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log("Fizz");
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  
// Modify the program to also print FizzBuzz for numbers divible by 3 and 5
  for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }