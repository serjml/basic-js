const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (direction = true) {
    this.direction = direction;
  }

  encrypt(string, key) {
    if (!string || !key) {
      throw new Error('Incorrect arguments!');
    }
 
    string = string.toUpperCase().split('');
    key = key.toUpperCase().split('');
  
    while(key.length < string.length) {
      key.push(...key);
    } 
    
    for(i = 0; i < string.length; i++) {
      if ((string[i].charCodeAt() < 65) || (string[i].charCodeAt() > 90)) {
        key.splice(i, 0, string[i])      
      }   
    }
    key = key.slice(0, string.length);
  
    key = key.map(el => el.charCodeAt());
    string = string.map(el => el.charCodeAt());
  
     for(i = 0; i < string.length; i++) {
       if (string[i] < 65 || string[i] > 90) {       
        continue;
       } else {
         string[i] += key[i] - 65;
         if (string[i] > 90) {
           string[i] = string[i] - 26;
         }
       }
     }  
   
    if (this.direction) {
      return string = string.map(el => String.fromCharCode(el)).join('');
    } else {
      return string = string.map(el => String.fromCharCode(el)).reverse().join('');
    }
  }

  decrypt(string, key) {
    if (!string || !key) {
      throw new Error('Incorrect arguments!');
    }
 
    string = string.toUpperCase().split('');
    key = key.toUpperCase().split('');
  
    while(key.length < string.length) {
      key.push(...key);
    } 
    
    for(i = 0; i < string.length; i++) {
      if ((string[i].charCodeAt() < 65) || (string[i].charCodeAt() > 90)) {
        key.splice(i, 0, string[i])      
      }   
    }
    key = key.slice(0, string.length);
  
    key = key.map(el => el.charCodeAt());
    string = string.map(el => el.charCodeAt());
  
     for(i = 0; i < string.length; i++) {
       if (string[i] < 65 || string[i] > 90) {       
        continue;
       } else {
         string[i] = string[i] - key[i] + 65;
         if (string[i] < 65) {
           string[i] = string[i] + 26;
         }
       }
     }  
   
    if (this.direction) {
      return string = string.map(el => String.fromCharCode(el)).join('');
    } else {
      return string = string.map(el => String.fromCharCode(el)).reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
