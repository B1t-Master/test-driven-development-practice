export function caesarCipher(plainText, key) {
  const plainTextAlphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let copy = JSON.parse(JSON.stringify(plainTextAlphabet));
  const cipherTextAlphabet = plainTextAlphabet
    .splice(key)
    .concat(plainTextAlphabet.splice(0, key));

  let cipherText = [];
  const regex = /^[A-Za-z]/;
  plainText.split("").forEach((element) => {
    if (!regex.test(element)) return cipherText.push(element);
    let isCapital = false;
    if (element == element.toUpperCase()) isCapital = true;
    element = element.toLowerCase();

    const transposedIndex = copy.indexOf(element);

    element = cipherTextAlphabet[transposedIndex];
    isCapital ? (element = element.toUpperCase()) : element;
    cipherText.push(element);
  });
  return cipherText.join("");
}
