const createChartData = (data_list) => {
  const datasets = data_list.map((value) => {
    const data = {
      label: value.label || 'device',
      data: value.data,
      borderColor: value.color,
      backgroundColor: 'rgba(0,0,0,0)'};
    return data;
  });
  const chart_config = {
    labels:
      [
        '0', '1', '2', '3', '4', '5',
        '6', '7', '8', '9', '10', '11',
        '12', '13', '14', '15',
      ],
    datasets: datasets,
  };

  return chart_config;
};

export default createChartData;
