function slice(arr, firstIndex = 0, lastIndex = arr.length) {
  const result = [];

  for (let i = firstIndex; i < lastIndex; i++) {
    result.push(arr[i]);
  }

  return result;
}
