const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let str2 = '';
  let res = 1;
 for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      res++;
    } else {
      if (res === 1) {
      str2 += str[i] 
    } else {
      str2 += res + str[i]
    }
      res = 1
    }
  }
  return str2
}

module.exports = {
  encodeLine
};
