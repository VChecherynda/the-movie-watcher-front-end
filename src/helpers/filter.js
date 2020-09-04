export const filterWords = (data, word, fields) =>
  data.filter(
    item => item[fields[0]].includes(word) || item[fields[1]].includes(word)
  );
