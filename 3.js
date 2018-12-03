// Problem 3
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

var num = 600851475143;
var primes = [2];

for (var i = 3; num !== 1; i++) {
  if (primes.every((prime) => (i % prime) !== 0)) {
    primes.push(i);
    while (num % i === 0) {
      num /= i;
    }
  }
}

console.log(primes.pop());