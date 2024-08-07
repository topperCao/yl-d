export const fieldNamesTransfrom = (fieldNames: any, treeData: any) => {
  // 自定义属性转换
  if (typeof fieldNames !== 'object') {
    return treeData;
  }
  const loop = (treeData) => {
    treeData.forEach((option) => {
      if (fieldNames.title) {
        option.title = option[fieldNames.title];
      }
      if (fieldNames.key) {
        option.key = option[fieldNames.key];
      }
      if (fieldNames.children) {
        option.children = option[fieldNames.children];
        if (option.children) {
          loop(option.children);
        }
      }
    });
  };
  loop(treeData); // 开始转换
  return treeData;
};

export const getLabelByValue = (key: string, treeData = []) => {
  if (key === undefined) {
    return undefined;
  }
  let title: string;
  const loop = (options = []) => {
    options.forEach((item) => {
      if (item.key === key) {
        title = item.title;
      } else if (Array.isArray(item.children)) {
        loop(item.children);
      }
    });
  };
  loop(treeData);
  return title;
};
