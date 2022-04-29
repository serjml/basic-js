const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
 function isMAC48Address( n ) {
  let arr2 = []
  let arr = n.split('');
  
  while(arr.includes('-')) {
    let inx = arr.indexOf('-');    
    arr.splice(inx, 1)
  }  
  
  arr.forEach(el => {
    for (i = 0; i < 2; i++) {      
    if (((el[i] >= 0) && (el[i] <= 9)) || ((el[i] >= 'A') && (el[i] <= 'F'))) {
       arr2.push(el[i])
    }     
  }    
}) 
  return (arr.length === arr2.length)
}

module.exports = {
  isMAC48Address
};
