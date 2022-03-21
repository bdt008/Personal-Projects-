// function binaryToString(binaryBlob) {
//   let binaryBlobArray = binaryBlob.split("")
//   let binaryArray = []
//   let i = 0;
//   let subString = '';

//   while (binaryBlobArray.length) {
// // console.log(i)

//     if(i === 8) {
//       binaryArray.push(subString)
//       i = 0;
//       subString = '';
//     }
//     let currentChar = binaryBlobArray.shift();
//     subString += currentChar;

//     i++
//   }
//   binaryArray.push(subString);

//   let myNumArr = binaryArray.map(el => parseInt(el, 2))
//   let myLetterArr = myNumArr.map(el => String.fromCharCode(el))
//   return myLetterArr.join("")
// } //baylen

// console.log(binaryToString('010000010100001001000011'));  // 'ABC'

// function binaryToDecimal(binary) {
//   if (!binary) return 0;
//   return binaryToDecimal(binary.slice(1)) + Number(binary[0]) * (Math.pow(2, binary.length - 1))
// }
// function binaryToString(binaryBlob) {
//   if(!binaryBlob) return "";
//   return String.fromCharCode(parseInt(binaryBlob.slice(0,8), 2)).concat(binaryToString(binaryBlob.slice(8)))
} //alonso

// function text2Binary(string) {
//   return string.split('').map(function (char) {
//       return char.charCodeAt(0).toString(2);
//   }).join(' ');
// }

// console.log(binaryToString('010000010100001001000011'));

function binaryToString(binaryBlob) {
  let arr = [];
  for(let i = 0; i < binaryBlob.length; i+= 8){
   arr.push(binaryBlob.substring(i,i+8));
  }
 return arr.map(element => {
   return String.fromCharCode(parseInt(element,2));
  }).join('')
};

  console.log(binaryToString('010000010100001001000011')); //scotty


// let helpFunc = binArr => {
//   let bytes = [];
//   for (let i = 0; i < binArr.length; i += 8) {
//     bytes.push(binArr.slice(i, i + 8));
//   }
//   return bytes;
// }
// let binaryToString = binaryBlob => {
//   let res = '';
//   let bytes = helpFunc(binaryBlob.split('')); // returns the groups of 8. Jaylen
//   for (let i = 0; i < bytes.length; i++) {
//     let byte = bytes[i].join('');
//     res += String.fromCharCode(parseInt(byte, 2));
//   }
//   return res;
// }

//if asked to turn String to binary, remember to use charCodeAt and toString methods
//charCodeAt returns the unique code on the ASCII chart. 
//toString can be used to turn a decimal in to binary or hex with built in Java functions. Make sure that the step
//is the base that youre trying to use. toString(2) <-- returns binary toString(16) <-- returns a letter
//String.fromCharCode also return letters from ASCII chart



console.log(binaryToString('010000010100001001000011'));
module.exports = binaryToString;
