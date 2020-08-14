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
        isLoading: false,
        smurfs: action.payload,
      };
    case POST_SMURF_COMPLETE:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload,
      };
    case POST_SMURF:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
