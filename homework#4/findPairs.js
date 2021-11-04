function allPairs(arr, target) {
  const pairs = {};
  const res = [];
  let ok = true;

  arr.forEach((el) => {
    pairs[target - el] = el;

    if (el === target / 2 && ok) {
      delete pairs[target - el];
      ok = false;
    }

    if (el in pairs) {
      res.push([el, pairs[el]]);
      delete pairs[target - el];
    }
  });

  return `Founded pairs ${JSON.stringify(res)}`;
}
