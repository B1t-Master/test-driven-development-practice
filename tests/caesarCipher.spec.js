import { caesarCipher } from "../caesarCipher";

test("Return an encrypted value from plain text", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("xyz", 4)).toBe("bcd");
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("Test case preservation on capitalised text", () => {
  expect(caesarCipher("xYz", 3)).toBe("aBc");
});

test("Keep punction marks and spaces", () => {
  expect(caesarCipher("xY,z", 3)).toBe("aB,c");
  expect(caesarCipher("The quick brown fox", 3)).toBe("Wkh txlfn eurzq ira");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
