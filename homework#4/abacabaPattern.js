function abacabaPattern(n) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (n === 0) {
    return "";
  }

  return abacabaPattern(n - 1) + alphabet[n - 1] + abacabaPattern(n - 1);
}
