const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let mat = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]  
  for (i = 0; i < matrix.length; i++) {
     for (j = 0; j < matrix[i].length; j++) {      
       if (matrix[i][j] === true) {      
         if ((i == 0) && (j == 0)) {          
           mat[i][j+1]++;
           mat[i+1][j]++;
           mat[i+1][j+1]++;          
         } else if ((i == matrix.length - 1) && (j == matrix[i].length - 1)) {
           mat[i-1][j-1]++;
           mat[i-1][j]++;
           mat[i][j-1]++; 
         } else if ((i == 0) && (j == matrix[i].length - 1)) {
           mat[i][j-1]++;        
           mat[i+1][j-1]++;
           mat[i+1][j]++;         
         } else if ((i == matrix.length - 1) && (j == 0)) {
           mat[i-1][j]++;
           mat[i-1][j+1]++;                 
           mat[i][j+1]++;
         } else if (i == 0) {
           mat[i][j-1]++;        
           mat[i][j+1]++;
           mat[i+1][j-1]++;
           mat[i+1][j]++;
           mat[i+1][j+1]++;
         } else if ((j == 0)) {
            mat[i-1][j]++;
            mat[i-1][j+1]++;
            mat[i][j+1]++;
            mat[i+1][j]++;
            mat[i+1][j+1]++;
         } else if (i == matrix.length - 1) {
           mat[i-1][j-1]++;
           mat[i-1][j]++;
           mat[i-1][j+1]++;
           mat[i][j-1]++;        
           mat[i][j+1]++;
         } else if (j == matrix[i].length - 1) {
           mat[i-1][j-1]++;
           mat[i-1][j]++;
           mat[i][j-1]++;
           mat[i+1][j-1]++;
           mat[i+1][j]++;
         } else {
           mat[i-1][j-1]++;
           mat[i-1][j]++;
           mat[i-1][j+1]++;
           mat[i][j-1]++;        
           mat[i][j+1]++;
           mat[i+1][j-1]++;
           mat[i+1][j]++;
           mat[i+1][j+1]++;
         } 
       }      
     }
 } 
 if (matrix.length - mat.length) {
  mat.splice(matrix.length - mat.length)
} 
   return mat
 }

module.exports = {
  minesweeper
};
