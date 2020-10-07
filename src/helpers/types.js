export const makeFetchingTypes = (prefix) => {
  const states = ["pending", "success", "error"];

  return states.reduce((acc, item) => {
    const key = item.toUpperCase();
    const value = `${prefix}/${item}`;

    acc[key] = value;
    return acc;
  }, {});
};
