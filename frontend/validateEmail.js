function validateEmail(email) {
  const reg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@ceedup\.com/i;
  const result = reg.test(email);

  return result;
};

export default validateEmail;
