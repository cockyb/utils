const checkEmailFormat = (email) => {
  const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const result = reg.test(email);

  return result;
};

export default checkEmailFormat;
