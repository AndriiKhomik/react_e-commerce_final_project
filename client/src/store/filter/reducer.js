import {
  SET_GENRES,
  SET_FORMATS,
  SET_MIN_PRICE,
  SET_MAX_PRICE,
  SET_SEARCH_STRING,
  SET_SELECTED_GENRE,
  SET_SELECTED_AUTHOR,
  SET_SELECTED_AUTHOR_ID,
  SET_TOTAL_COUNT_OF_PAGES,
  SET_CURRENT_PAGE
} from './types';

const initialState = {
  genres: [],
  formats: [],
  minPrice: 0,
  maxPrice: 0,
  searchString: '',
  selectedGenre: '',
  author: '',
  authorId: '',
  totalCountOfPages: 1,
  currentPage: 1,
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

    case SET_SELECTED_AUTHOR:
      return { ...state, author: action.payload };

    case SET_SELECTED_AUTHOR_ID:
      return { ...state, authorId: action.payload };

    case SET_TOTAL_COUNT_OF_PAGES:
      return { ...state, totalCountOfPages: action.payload };

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };

    default:
      return state;
  }
};
