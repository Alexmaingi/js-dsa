function chunkArr(arr, size) {
  const chunk = [];
  for (let i = 0; i < arr.length; i += size) {
    chunk.push(arr.slice(i, i + size));
  }
  return chunk;
}

console.log(chunkArr([1, 2, 3, 3, 4, 5, 6, 7], 2));
