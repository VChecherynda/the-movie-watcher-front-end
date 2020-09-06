export const filterEntetiesByWords = (data, word, fields) => {
  if (data) {
    return data.filter(item =>
      fields.some(field => item[field].includes(word))
    );
  }

  return [];
};
