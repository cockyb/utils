const checkPasswordFormat = (password) => {
  const reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/g;
  const result = reg.test(password);

  return result;
};

export default checkPasswordFormat;
