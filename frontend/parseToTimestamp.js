const parseToTimestamp = (date) => {
  const parsedDate = Date.parse(date);
  return parsedDate/1000;
};

export default parseToTimestamp;
