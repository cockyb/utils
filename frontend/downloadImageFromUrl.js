import download from 'downloadjs';

const downloadImageFromUrl = ({url, file_name}) => new Promise(
  async (resolve, reject) => {
    try {
      const res = await fetch(url);
      const image_blob = await res.blob();
      download(image_blob, `${file_name}`, 'image/png');
      resolve();
    } catch (err) {
      console.log(err);
      reject(err);
    }
  },
);

export default downloadImageFromUrl;
