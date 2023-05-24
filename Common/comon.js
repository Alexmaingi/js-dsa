function maxChar(x) {
  let str = x.toString();
  const occurrence_Map = new Map();
  for (let char of str) {
    occurrence_Map.set(char, occurrence_Map.get(char) + 1 || 1);
  }
  let max_char = { char: "", occur: -Infinity };
  for (const [char, occur] of occurrence_Map) {
    if (occur > max_char.occur) {
      max_char = { char, occur };
    }
  }
  return max_char.char;
}

console.log(maxChar("mBbto"));

module.exports = maxChar;
