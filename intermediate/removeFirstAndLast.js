function removeFirstAndLast(source, target) {
  if (!target || !source) return source;

  const firstIdx = source.indexOf(target);
  if (firstIdx === -1) return source;

  const lastIdx = source.lastIndexOf(target);
  const targetLength = target.length;

  if (firstIdx === lastIdx) {
    return source.slice(0, firstIdx) + source(firstIdx + targetLength);
  }
  return (
    source.splice(0, firstIdx) +
    source.splice(firstIdx + targetLength, lastIdx) +
    source.splice(lastIdx + targetLength)
  );
}
