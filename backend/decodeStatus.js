const errorGenerator = require('./errorGenerator');

function decodeStatus(data) {
  const data_array = data.trim().split(' ');

  const device_count = data_array.length / 6;

  if (device_count % 1 !== 0) {
    throw errorGenerator({
      code: 'decodeStatus/wrong-format',
      message: 'unfit stream format',
    });
  }

  const status = {
    realtime_fire: true,
    realtime_broken: true,
    realtime_crime: true,
    realtime_leaned: true,
    realtime_alive: true,
    realtime_battery_low: [],
  };

  data_array.forEach((data, i) => {
    const d = Boolean(Number(data));

    switch ((i + 1) % 6) {
    case 1:
      status.realtime_crime = status.realtime_crime && d;
      break;
    case 2:
      status.realtime_leaned = status.realtime_leaned && d;
      break;
    case 3:
      status.realtime_broken = status.realtime_broken && d;
      break;
    case 4:
      status.realtime_fire = status.realtime_fire && d;
      break;
    case 5:
      status.realtime_battery_low[Math.floor((i + 1) / 6)] = d ? 'low' : '';
      break;
    case 0:
      status.realtime_battery_low[Math.floor((i + 1) / 6) - 1] = d ? 'safe' : '';
      break;
    default:
      throw errorGenerator({
        code: 'decodeStatus/segmetation-fault',
        message: 'segmentation-fault',
      });
    }
  });

  return status;
}

module.exports = decodeStatus;
