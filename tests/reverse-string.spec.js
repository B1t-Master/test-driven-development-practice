import { reverseString } from "../reverse-string";

test("gives an input of string in reverse order", () => {
  expect(reverseString("odin")).toBe("nido");
});

test("gives an input of string in reverse order", () => {
  expect(reverseString(null)).toBe(undefined);
});
