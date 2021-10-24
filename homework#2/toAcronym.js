function toAcronum(str) {
  return str
    .split(" ")
    .map((el) => el[0])
    .join("")
    .toUpperCase();
}
