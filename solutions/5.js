// Problem 5
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

var product = 1;
var primes = [];

for (var i = 2; i <= 20; i++) {
  if (primes.every((prime) => (i % prime) !== 0)) {
    primes.push(i);
    product *= i;
  } else if (product % i !== 0) {
    primes.some((prime) => {
      if (i % prime === 0) {
        product *= prime;
        return true;
      }
      return false;
    });
  }
}
console.log(product);