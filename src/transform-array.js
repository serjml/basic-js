const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(array) {
  if (!Array.isArray(array)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  if (array.length == 0) return [];
  let arr = [...array];  
  let trans = ['--discard-next', '--double-next', '--discard-prev', '--double-prev'];

  for (i = 0; i < trans.length; i++) {
 let ind = arr.indexOf(trans[i]);
  if (ind >= 0) {     
    switch(i) {
      case 0: arr.splice(ind, 2, '');        
      break;
      case 2: if (ind == 0) {
        arr.splice(ind, 1, '');
      } else {
        arr.splice(ind - 1, 2, '');
      }
      break;
      case 1: if (ind == (arr.length - 1)) {
        arr.splice(ind, 1, '');
      } else {
        arr.splice(ind, 1, arr[ind + 1]);        
      }
      break;
      case 3: if (ind == 0) {
        arr.splice(ind, 1, '');
      } else {
        arr.splice(ind, 1, arr[ind - 1]);        
      }
      break;
      default: alert('oops')  
    }
  }
}
   
   
   let filtered = arr.filter(el => (el != ''));
   return filtered;
}

module.exports = {
  transform
};
