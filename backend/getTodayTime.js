const getTodayTime = () => {
  const today_string = new Date().toDateString();
  const today_time = new Date(today_string).getTime();

  return today_time;
};

module.exports = getTodayTime;
