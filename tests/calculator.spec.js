const calculator = require("../calculator");

test("Adds two values", () => {
  expect(calculator(2, 2)).expect(4);
});
