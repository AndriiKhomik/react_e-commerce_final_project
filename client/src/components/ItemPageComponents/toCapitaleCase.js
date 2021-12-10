export const toCapitaleCase = (str) => {
  if (str !== 'non-fiction') {
    return str
      .split('-')
      .map((w) => `${w[0].toUpperCase()}${w.slice(1)}`)
      .join(' ');
  }
  return str[0].toUpperCase() + str.slice(1);
};
