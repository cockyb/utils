const separateObjectList = (objectList) => {
  const sampleObject = Object.assign({}, objectList[0]);
  const columnList = Object.keys(sampleObject);
  const columns = columnList.map((column) => {
    const title = column;
    const dataIndex = column.toLowerCase();
    const key = dataIndex;

    return {
      title,
      dataIndex,
      key,
    };
  });

  const dataSource = objectList.map((object, index) => {
    object.key = String(index+1);
    return object;
  });

  return [columns, dataSource];
};

export default separateObjectList;
