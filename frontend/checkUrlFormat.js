/* eslint-disable max-len */
const checkUrlFormat = (url) => {
  const reg = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
  const result = reg.test(url);

  return result;
};

export default checkUrlFormat;
