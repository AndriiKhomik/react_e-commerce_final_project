import {
  SET_GENRES,
  SET_FORMATS,
  SET_MIN_PRICE,
  SET_MAX_PRICE,
  SET_SEARCH_STRING,
  SET_SELECTED_GENRE,
  SET_SELECTED_SORT,
  SET_SELECTED_TAG,

} from './types';

const initialState = {
  genres: [],
  formats: [],
  minPrice: 0,
  maxPrice: 0,
  searchString: '',
  selectedGenre: '',
  selectedSort: 'higher-price',
  selectedTag: 'all-books',
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

    case SET_SELECTED_GENRE:
      return { ...state, selectedGenre: action.payload };

    case SET_SELECTED_SORT:
      return { ...state, selectedSort: action.payload };

    case SET_SELECTED_TAG:
      return { ...state, selectedTag: action.payload };

    default:
      return state;
  }
};
