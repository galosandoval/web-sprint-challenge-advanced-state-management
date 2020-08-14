import {
  LOAD_SMURFS,
  DISPLAY_SMURFS,
  POST_SMURF,
  POST_SMURF_COMPLETE,
} from "../actions";

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
        smurfs: action.payload,
        isLoading: false,
      };
    case POST_SMURF:
      return {
        ...state,
        isLoading: true,
      };
    case POST_SMURF_COMPLETE:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
        isLoading: false,
      };
    default:
      return state;
  }
};
