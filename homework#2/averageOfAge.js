function averageOfAge(array) {
  const firstItem = array[0].age;
  return (
    (array.reduce((acc, el) => acc + el.age, firstItem) - firstItem) /
    array.length
  );
}
