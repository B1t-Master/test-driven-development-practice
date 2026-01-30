import { calculator } from "../calculator";

test("Adds two values", () => {
  expect(calculator.add(2, 2)).toBe(4);
  expect(calculator.add("2", 2)).toBe(4);

  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.add(null, 3)).toBe("Math error");
  expect(calculator.add(3, null)).toBe("Math error");
});

test("Substarcts two values", () => {
  expect(calculator.substract(2, 2)).toBe(0);
  expect(calculator.substract(3, 2)).toBe(1);
});

test("Divide two values", () => {
  expect(calculator.divide(2, 2)).toBe(1);
  expect(calculator.divide(6, 2)).toBe(3);
  expect(calculator.divide(2, 2)).toBe(1);
  expect(calculator.divide(2, 0)).toBe("Cant divide by 0");
});

test("Multiply two values", () => {
  expect(calculator.multiply(3, 2)).toBe(6);
  expect(calculator.multiply(4, 2)).toBe(8);
});
