export const filterEntetiesByWords = (data, word, fields) => {
  if (data) {
    return data.filter(item =>
      fields.some(field => item[field].includes(word))
    );
  }

  return [];
};

export const checkStringForUniqueValues = (string, separator = ",") => {
  if (!string) return false;

  const stringWithoutSpaces = string.replace(/ /g, "");
  const stringDivided = stringWithoutSpaces.split(separator);

  if (stringDivided.length && stringDivided.length > 1) {
    return stringDivided.length === new Set(stringDivided).size;
  }

  return true;
};
