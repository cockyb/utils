const parseIOSDate = (date) => {
  const date_array = date.toLocaleDateString().split('.');

  let date_string = '';

  date_string += `${date_array[0]}년`;
  date_string += `${date_array[1]}월`;
  date_string += `${date_array[2]}일, `;

  switch (date.getDay()) {
  case 1:
    date_string += '월요일';
    break;
  case 2:
    date_string += '화요일';
    break;
  case 3:
    date_string += '수요일';
    break;
  case 4:
    date_string += '목요일';
    break;
  case 5:
    date_string += '금요일';
    break;
  case 6:
    date_string += '토요일';
    break;
  case 7:
    date_string += '일요일';
    break;
  default:
    break;
  }

  return date_string;
};

export default parseIOSDate;
