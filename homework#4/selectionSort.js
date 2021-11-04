function selectionSort(arr) {
  const getMinIndex = (arr, index) => {
    let min = arr[index],
      minIdx = index;
    for (let i = 1 + index; i < arr.length; i++) {
      if (min > arr[i]) {
        min = arr[i];
        minIdx = i;
      }
    }
    return minIdx;
  };
  for (let i = 0; i < arr.length - 1; i++) {
    const minIdx = getMinIndex(arr, i);
    if (arr[i] > arr[minIdx]) {
      const temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
    }
  }
  return arr;
}
