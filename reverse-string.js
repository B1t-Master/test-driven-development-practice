export function reverseString(string) {
  if (!(typeof string === "string")) return undefined;
  return string.split("").reverse().toString().replaceAll(",", "");
}
