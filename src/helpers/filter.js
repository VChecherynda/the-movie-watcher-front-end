export const filterWords = (data, word, fields) => {
  if (data) {
    return data.filter(
      item => item[fields[0]].includes(word) || item[fields[1]].includes(word)
    );
  }

  return [];
};
