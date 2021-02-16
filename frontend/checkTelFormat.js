const checkTelFormat = (tel) => {
  const reg = /^\d{2,3}-\d{3,4}-\d{4}$/;
  const result = reg.test(tel);

  return result;
};

export default checkTelFormat;
