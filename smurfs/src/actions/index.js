import axios from "axios";

export const LOAD_SMURFS = "LOAD_SMURFS";
export const DISPLAY_SMURFS = "DISPLAY_SMURFS";

export const fetchSmurfs = () => (dispatch) => {
  dispatch({ type: LOAD_SMURFS });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => dispatch({ type: DISPLAY_SMURFS, payload: res.data }))
    .catch((err) => console.log(err, "lol"));
};

const thunk = (store) => (next) => (action) => {
  if (typeof action === "object") {
    next(action);
  } else if (typeof action === "function") {
    action(store.dispatch);
  }
};
