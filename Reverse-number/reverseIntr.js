// const reverseInteger = (num) => {
//   const isNegative = num < 0;
//   const numString = Math.abs(num).toString();
//   const reversedString = numString.split("").reverse().join("");
//   const reversedNum = +reversedString;

//   return isNegative ? -reversedNum : reversedNum;
// };

// module.exports = { reverseInteger };

function reverseInteger(num) {
  const reversed = parseInt(num.toString().split("").reverse().join(""));
  return Math.sign(num) * reversed;
}

console.log(reverseInteger("-42abc345"));

// console.log(reverseInteger(42345));
