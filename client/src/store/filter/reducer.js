import { SET_GENRES, SET_FORMATS } from './types';
// import { SET_GENRES, SET_FORMAT, SET_MIN_PRICE, SET_MAX_PRICE } from './types';
const initialState = {
  genres: [],
  formats: [],
  minPrice: 0,
  maxPrice: 0,
  search: '',
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

    default:
      return state;
  }
};
