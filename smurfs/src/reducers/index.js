import { LOAD_SMURFS, DISPLAY_SMURFS } from "../actions";

const initialState = {
  smurfs: [],
  isLoading: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SMURFS:
      return {
        ...state,
        isLoading: true,
      };
    case DISPLAY_SMURFS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload,
      };
    default:
      return state;
  }
};
