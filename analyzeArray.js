export function analyzeArray(array) {
  if (!(array instanceof Array)) return undefined;
  const getMax = (a, b) => Math.max(a, b);
  const getMin = (a, b) => Math.min(a, b);

  const sum = array.reduce((acc, curr) => acc + curr, 0);
  const length = array.length;
  const avg = sum / length;

  const max = array.reduce(getMax);
  const min = array.reduce(getMin);

  return {
    average: avg,
    min: min,
    max: max,
    length: length,
  };
}
