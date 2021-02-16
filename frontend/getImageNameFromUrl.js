const getImageNameFromUrl = (url) => {
  const name = url.split('%2F')[1].split('?')[0];

  return name;
};

export default getImageNameFromUrl;
