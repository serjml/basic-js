const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let arr = [];
  let obj = {};
  let arr2 = []
  domains.forEach(el => {    
    arr.push(el.split('.').reverse())   
  })


  arr.forEach(el => {  
    for (i = 1; i <= el.length; i++) {
     arr2.push(el.slice(0, i))
    }    
  })

  let mapArr = arr2.map(el => {
   return el = ('.' + el.join('.'))
  })
  
  mapArr.forEach(el => {
    if (!obj[el]) {
      obj[el] = 1;
    } else {
      obj[el] += 1
    }
  })
  return obj
 }
 
module.exports = {
  getDNSStats
};
