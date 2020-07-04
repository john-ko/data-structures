// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', _ => {
//     inputString = inputString.replace(/\s*$/, '')
//         .split('\n')
//         .map(str => str.replace(/\s*$/, ''));

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// Complete the hourglassSum function below.
function hourglassSum(arr) {


}

function arrSum (array) {
  return array.reduce((accumulator, number) => {
    return accumulator + number
  }, 0)
}

function sumHourglass (arr, i, j) {
  if (i < 0 || (i + 2) > 5) {
    throw new Error(`Index i is out of bounds ${i}`)
  }

  if (j < 0 || (j + 2) > 5) {
    throw new Error(`Index j is out of bounds ${j}`)
  }

  // i - j, j+1, j+2
  // i+1, j+1
  // i+2, j, j+1, j+2

  const top = arr[i].slice(j, j + 3)
  const middle = arr[i+1][j+1]
  const bottom = arr[i+2].slice(j, j + 3)

  return arrSum(top) + middle + arrSum(bottom)
}



// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     let arr = Array(6);

//     for (let i = 0; i < 6; i++) {
//         arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
//     }

//     let result = hourglassSum(arr);

//     ws.write(result + "\n");

//     ws.end();
// }
