function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    while (arr[i - 1] > arr[i] && i > 0) {
      [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
      i--;
    }
  }

  return arr;
}
