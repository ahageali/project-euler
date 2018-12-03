// Problem 4
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

function isPalindrome(str) {
  for (var i = 0; i < str.length/2; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}

var maxPalindrome = 0;
for (var i = 999; i >= 100; i--) {
  for (var j = i; j >= 100; j--) {
    const product = i*j;
    if (isPalindrome(product.toString()) && product > maxPalindrome) {
      maxPalindrome = product;
    }
  }
}
console.log(maxPalindrome);