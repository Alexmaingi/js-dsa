function reverseString(str) {
  let x = "";
  for (let i = str.length - 1; i >= 0; i--) {
    x += str[i];
  }
  return x;
}
console.log(reverseString("mkuu"));
module.exports = reverseString;

// console.log(reverseString("hello"));
// function reverseInteger(num) {
//   const reversed = parseInt(num.toString().split("").reverse().join(""));
//   return Math.sign(num) * reversed;
// }

// console.log(reverseInteger("-42abc345"));

//perseInt converts upto where there is a number

//Given an array and chunk size divide the array into many subarrays where each subarray length is the chunk size.

//[(1,2,3,3,4,5,6,7],3) ===[ [ 1, 2, 3 ], [ 3, 4, 5 ], [ 6, 7 ] ]

//([1,2,3,5,6,7],1) ===[ [ 1 ], [ 2 ], [ 3 ], [ 5 ], [ 6 ], [ 7 ] ]

// function chunkArr(arr, size) {
//   const chunk = [];
//   for (let i = 0; i < arr.length; i += size) {
//     chunk.push(arr.slice(i, i + size));
//   }
//   return chunk;
// }

// console.log(chunkArr([1, 2, 3, 3, 4, 5, 6, 7], 2));

// function maxChar(str) {
//   const occurrence_Map = new Map();
//   for (let char of str) {
//     occurrence_Map.set(char, occurrence_Map.get(char) + 1 || 1);
//   }
//   let max_char = { char: "", occur: -Infinity };
//   for (const [char, occur] of occurrence_Map) {
//     if (occur > max_char.occur) {
//       max_char = { char, occur };
//     }
//   }
//   return max_char.char;
// }

// console.log(maxChar(12344445));

// function maxChar(str) {
//   const counts = [];
//   for (let i = 0; i < str.length; i++) {
//     const index = counts.findIndex((c) => c.char === str[i]);
//     if (index === -1) {
//       counts.push({ char: str[i], count: 1 });
//     } else {
//       counts[index].count++;
//     }
//   }
//   counts.sort((a, b) => b.count - a.count);
//   return counts[0].char;
// }
// console.log(maxChar("112we"));

function firstLetter(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

console.log(firstLetter("eyaa semaje mkuu"));
