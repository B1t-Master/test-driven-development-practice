export const calculator = (function () {
  function add(num1, num2) {
    if (!parseInt(num1) || !parseInt(num2)) return "Math error";
    return parseInt(num1) + parseInt(num2);
  }

  function substract(num1, num2) {
    if (!parseInt(num1) || !parseInt(num2)) return "Math error";

    return parseInt(num1) - parseInt(num2);
  }

  function divide(num1, num2) {
    if (num2 === 0) return "Cant divide by 0";
    if (!parseInt(num1) || !parseInt(num2)) return "Math error";

    return parseInt(num1) / parseInt(num2);
  }
  function multiply(num1, num2) {
    if (!parseInt(num1) || !parseInt(num2)) return "Math error";

    return parseInt(num1) * parseInt(num2);
  }
  return { add, substract, divide, multiply };
})();
