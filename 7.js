// Problem 7 
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

var primes = [];
for (var i = 2; primes.length < 10001; i++) {
  if (primes.every((prime) => (i%prime) !== 0)) {
    primes.push(i);
  }
}
console.log(primes[10000]);