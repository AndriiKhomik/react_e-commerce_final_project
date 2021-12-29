import {
  SET_GENRES,
  SET_FORMATS,
  SET_MIN_PRICE,
  SET_MAX_PRICE,
  SET_SEARCH_STRING,
  SET_SELECTED_AUTHOR,
  SET_TOTAL_COUNT_OF_PAGES,
} from './types';

const initialState = {
  genres: [],
  formats: [],
  minPrice: 0,
  maxPrice: 500,
  searchString: '',
  selectedGenre: '',
  author: '',
  totalCountOfPages: 1,
};
export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GENRES: {
      const filteredGenres = state.genres.filter((genre) => {
        return genre.name !== action.payload.name;
      });
      return {
        ...state,
        genres: [
          ...filteredGenres,
          { name: action.payload.name, isChecked: action.payload.isChecked },
        ],
      };
    }

    case SET_FORMATS: {
      const filteredFormats = state.formats.filter((format) => {
        return format.name !== action.payload.name;
      });
      return {
        ...state,
        formats: [
          ...filteredFormats,
          { name: action.payload.name, isChecked: action.payload.isChecked },
        ],
      };
    }

    case SET_MIN_PRICE:
      return { ...state, minPrice: action.payload };

    case SET_MAX_PRICE:
      return { ...state, maxPrice: action.payload };

    case SET_SEARCH_STRING:
      return { ...state, searchString: action.payload };

    case SET_SELECTED_AUTHOR:
      return { ...state, author: action.payload };

    case SET_TOTAL_COUNT_OF_PAGES:
      return { ...state, totalCountOfPages: action.payload };

    default:
      return state;
  }
};
