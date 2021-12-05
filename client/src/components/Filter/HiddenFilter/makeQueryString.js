/* eslint-disable no-unused-expressions */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

const getValues = (obj) => {
  const values = [];
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      for (const el of obj[key]) {
        if (el.isChecked) {
          values.push({
            [key]: el.name.trim().toLowerCase().replace(' ', '-'),
          });
        }
      }
    } else {
      values.push({ [key]: obj[key] });
    }
  }
  return values;
};

const formString = (arr) => {
  let fStr = '';
  let gStr = '';
  let maxPriceStr = '';
  let minPriceStr = '';
  let searchStr = '';
  let queryStr = '';
  arr.forEach((element) => {
    for (const key in element) {
      if (key === 'formats') {
        fStr += `${element[key]},`;
      }
      if (key === 'genres') {
        gStr += `${element[key]},`;
      }
      if (key === 'maxPrice') {
        maxPriceStr = `&maxprice=${element[key]}`;
      }
      if (key === 'minPrice') {
        minPriceStr = `&minprice=${element[key]}`;
      }
      if (key === 'searchString') {
        element[key] !== ''
          ? (searchStr = `&${key.toLowerCase()}=${element[key]}`)
          : '';
      }
    }
    const genreStr = `genre=${gStr.slice(0, -1)}&`;
    const formatStr = `categories=${fStr.slice(0, -1)}`;
    queryStr = genreStr + formatStr + maxPriceStr + minPriceStr + searchStr;
  });
  return queryStr;
};

export const makeQueryString = (data) => {
  return formString(getValues(data));
};
