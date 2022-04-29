const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
 function getSumOfDigits(n) {
  let res;
  n = String(n);
  function sumNumber(n, sum = 0) {    
  let arr = n.split('')
  arr.forEach(el => {
    sum += (+el);   
  })
    res = String(sum)
  if (res.length == 1) {
    return res    
  } else {
    sumNumber(res, sum = 0)
  }    
}
  sumNumber(n)  
  return +res
}
module.exports = {
  getSumOfDigits
};
