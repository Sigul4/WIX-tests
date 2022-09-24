/**

 Create a function that returns the sum of all multiples of 3 or 5 (number that is divisible by 3 or 5)
 below the number passed in.

 Example:
 If passed n = 15, we get numbers 3, 5, 6, 9, 10 and 12 that are multiples of 3 or 5 and less than 15.
 The sum of these multiples is 45.

 If the number is a multiple of both 3 and 5, only count it once.
*/

module.exports = function computeSumOfMultiples(n) {
  let res = 0;

  if (n <= 3 || n <= 5) return 0;

  for (let elem = 0; elem < n; elem++) {
    if (elem % 3 === 0 || elem % 5 === 0) res += elem;
  }

  return n < 0 ? 0 : res;
};
