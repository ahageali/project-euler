// Problem 10 
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

var marks = []

for (var i = 2; i < 2000000; i++) {
  marks[i] = false;
}

var sum = 0;
for (var i = 2; i < 2000000; i++) {
  if (!marks[i]) {
    sum += i;
    for (var j = 2*i; j < 2000000; j+=i) {
      marks[j] = true;
    }
  }
}
console.log(sum);