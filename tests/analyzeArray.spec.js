import { analyzeArray } from "../analyzeArray";

test("Sucessfully output average, min , max , length", () => {
  const testArray = [1, 8, 3, 4, 2, 6];
  const testArray2 = [7, 8, 3, 4, 2, 6];

  expect(analyzeArray(testArray)).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
  expect(analyzeArray(testArray2)).toEqual({
    average: 5,
    min: 2,
    max: 8,
    length: 6,
  });
});

test("Only works for array inputs", () => {
  const fakeArray = {};

  expect(analyzeArray(fakeArray)).toEqual(undefined);
});
