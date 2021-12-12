/* eslint-disable no-unused-expressions */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

const getValues = (obj) => {
  const values = [];
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      for (const el of obj[key]) {
        if (el.isChecked) {
          const modifiedKey = key === 'formats' ? 'categories' : 'genre';
          values.push({
            [modifiedKey || key]: el.name
              .trim()
              .toLowerCase()
              .replace(' ', '-'),
          });
        }
      }
    } else {
      values.push({ [key]: obj[key] });
    }
  }
  return values;
};

const formCheckboxQuery = (key, value) => {
  return value !== '' ? `${key.toLowerCase()}=${value.slice(0, -1)}&` : value;
};
const formPriceQuery = (key, obj) => {
  const priceStr = `${key}=${obj[key]}`;
  return priceStr;
};

const formSearchQuery = (key, value) => {
  return value !== '' ? `&${key}=${value.replace(/\s\s+/g, " ").trim().split(' ').join('+')}` : value;
};

const formString = (arr) => {
  let fStr = '';
  let gStr = '';
  let genreStr = '';
  let formatStr = '';
  let maxPriceStr = '';
  let minPriceStr = '';
  let searchStr = '';
  let queryStr = '';
  arr.forEach((element) => {
    for (const key in element) {
      if (key === 'categories') {
        fStr += `${element[key]},`;
        formatStr = formCheckboxQuery(key, fStr);
      }
      if (key === 'genre') {
        gStr += `${element[key]},`;
        genreStr = formCheckboxQuery(key, gStr);
      }
      if (key === 'maxPrice') {
        maxPriceStr = formPriceQuery(key, element);
      }
      if (key === 'minPrice') {
        minPriceStr = formPriceQuery(key, element);
      }

      if (key === 'searchString') {
        searchStr = formSearchQuery(key, element[key]);
      }
    }
    queryStr = `${genreStr}${formatStr}${maxPriceStr}&${minPriceStr}${searchStr}`;
  });
  return queryStr.trim();
};

export const makeQueryString = (data) => {
  return formString(getValues(data));
};
