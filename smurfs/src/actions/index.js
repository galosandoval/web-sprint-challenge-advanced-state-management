import axios from "axios";

export const LOAD_SMURFS = "LOAD_SMURFS";
export const DISPLAY_SMURFS = "DISPLAY_SMURFS";

export const POST_SMURF = "POST_SMURF";
export const POST_SMURF_COMPLETE = "POST_SMURF_COMPLETE";
export const POST_FAIL = "POST_FAIL";


export const fetchSmurfs = () => (dispatch) => {
  dispatch({ type: LOAD_SMURFS });
  axios
  .get("http://localhost:3333/smurfs")
  .then((res) => dispatch({ type: DISPLAY_SMURFS, payload: res.data }))
  .catch((err) => console.log(err, "lol"));
};

export const postSmurfs = (smurf) => (dispatch) => {
  dispatch({ type: POST_SMURF });
  console.log("Before axios", smurf);
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then((res) => dispatch({ type: POST_SMURF_COMPLETE, payload: res.data }))
    .catch((err) => dispatch({ type: POST_FAIL, payload: err }));
};
// const thunk = (store) => (next) => (action) => {
//   if (typeof action === "object") {
//     next(action);
//   } else if (typeof action === "function") {
//     action(store.dispatch);
//   }
// };
