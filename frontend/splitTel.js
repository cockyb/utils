const splitTel = (tel) => {
  const [tel_1, tel_2, tel_3] = tel.split('-');

  return {tel_1, tel_2, tel_3};
};

export default splitTel;
