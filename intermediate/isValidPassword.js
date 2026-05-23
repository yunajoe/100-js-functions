function isValidPassword(password) {
  const alphabetRegex = /[A-Z]/g;
  const result = password.match(alphabetRegex);
  const condition1 = result && result.length >= 3 ? true : false;
  const digitRegex = /\d/;
  const specialLetterRegex = /[_!?*]/;
  const condition2 = digitRegex.test(password);
  const condition3 = specialLetterRegex.test(password);
  return condition1 && condition2 && condition3;
}

isValidPassword("A!B2C2");
