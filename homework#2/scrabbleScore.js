function scrabbleScore(str) {
  const obj = {
    e: 1,
    a: 1,
    i: 1,
    o: 1,
    n: 1,
    r: 1,
    t: 1,
    l: 1,
    s: 1,
    u: 1,
    d: 2,
    g: 2,
    b: 3,
    c: 3,
    m: 3,
    p: 3,
    f: 4,
    h: 4,
    v: 4,
    w: 4,
    y: 4,
    k: 5,
    j: 6,
    x: 6,
    q: 10,
    z: 10,
  };
  let score = 0;
  for (const char of str.toLowerCase()) {
    score += obj[char];
  }
  return score;
}
