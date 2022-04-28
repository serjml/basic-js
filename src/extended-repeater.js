const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let add = [];
  let strArr = [];
  for (i = 0; i < (options.additionRepeatTimes || 1); i++) {
    if (options.addition !== undefined) {
      let addit = String(options.addition)
      add.push(addit)
    }      
  }
  let addStr = add.join(options.additionSeparator || '|')
  
  for (i = 0; i < (options.repeatTimes || 1); i++) {
    strArr.push((str + addStr))
  }
  return strArr.join(options.separator || '+')
}

module.exports = {
  repeater
};
