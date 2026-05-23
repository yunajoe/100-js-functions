function isValidPassword(password) {
  const alphabetRegex = /[A-Z]/g;
  const digitRegex = /\d/;
  const specialLetterRegex = /[_!?*]/;
  const condition1 = alphabetRegex.test(password.toUpperCase());
  const condition2 = digitRegex.test(password);
  const condition3 = specialLetterRegex.test(password);
  return condition1 && condition2 && condition3;
}
