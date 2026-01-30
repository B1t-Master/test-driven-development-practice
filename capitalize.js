export function capitalize(string) {
  if (!(typeof string === "string")) return undefined;
  return string.replace(string.at(0), `${string.charAt(0).toUpperCase()}`);
}
