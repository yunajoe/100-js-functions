function getCheckPassword(password) {
  return function closeReturnFunc(password2) {
    return password === password2;
  };
}
