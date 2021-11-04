function tree(obj) {
  if (!obj.next) {
    return [obj.value];
  }

  return [obj.value, ...tree(obj.next)];
}
