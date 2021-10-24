function sumOver18(arr) {
  return (
    arr.reduce((acc, el) => {
      if (el >= 18) {
        return acc + el;
      }
      return acc;
    }) - arr[0]
  );
}
