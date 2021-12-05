const excludedParams = ["perPage", "startPage", "minprice", "maxprice", "sort", "searchstring"];

module.exports = function filterParser(filtersQueryString) {
  const mongooseQuery = {};

  if (filtersQueryString.minprice || filtersQueryString.maxprice) {
    mongooseQuery.currentPrice = {
      $gte: Number(filtersQueryString.minprice),
      $lte: Number(filtersQueryString.maxprice)
    };
  }
  if (filtersQueryString.searchstring) {
    const filterString =
      filtersQueryString.searchstring
        .trim()
        .replace(/\s\s+/g, " ");
    mongooseQuery.searchstring = {
      name: { $search: filterString }
      // $text: { $search: filtersQueryString.searchstring }
    }
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
