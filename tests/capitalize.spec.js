const capitalize = require("../capitalize");

test("capitalize the first letter of a string", () => {
  const strings = [
    { string: "odin", expected: "Odin" },
    { string: "thor", expected: "Thor" },
  ];
  strings.forEach((elem) => {
    expect(capitalize(elem.string)).toBe(elem.expected);
  });
});

test("doesnt evaluate for arguements that arent strings", () => {
  const nonStrings = [0, null, {}];
  nonStrings.forEach((elem) => {
    expect(capitalize(elem)).toBe(undefined);
  });
});
