const checkIdFormat = (id) => {
  const reg = /^[a-z0-9]{5,15}$/g;
  const result = reg.test(id);

  return result;
};

export default checkIdFormat;
