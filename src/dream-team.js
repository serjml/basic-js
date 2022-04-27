const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  if (!Array.isArray(arr)) return false;
  let arr2 = arr.map(el => {
    if (typeof el === 'string') {
      return el = el.trim().toUpperCase();
    }    
  });  
  arr2.sort();
  let str = '';
  arr2.forEach(el => {
    if (typeof el === 'string') {
      return str += el[0];
    }       
  });
  return str;
}

module.exports = {
  createDreamTeam
};
