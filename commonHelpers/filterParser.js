const excludedParams = ["perPage", "startPage", "minprice", "maxprice", "sort", "searchstring"];
const Product = require("../models/Product");

module.exports = function filterParser(filtersQueryString) {
  const mongooseQuery = {};

  if (filtersQueryString.minprice || filtersQueryString.maxprice) {
    mongooseQuery.currentPrice = {
      $gte: Number(filtersQueryString.minprice),
      $lte: Number(filtersQueryString.maxprice)
    };
  }

  return Object.keys(filtersQueryString).reduce(
    (mongooseQuery, filterParam) => {
      if (filtersQueryString[filterParam].includes(",")) {
        mongooseQuery[filterParam] = {
          $in: filtersQueryString[filterParam]
            .split(",")
            .map(item => decodeURI(item))
        };
      } else if (!excludedParams.includes(filterParam)) {
        mongooseQuery[filterParam] = decodeURI(filtersQueryString[filterParam]);
      }

      return mongooseQuery;
    },
    mongooseQuery
  );
};
