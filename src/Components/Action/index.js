import axios from "axios";
import { AUTHENTICATE_USER, FETCH_USER } from "../Action/type";

export const fetch_user = () => {
  // axios.get("/api/current_user");

  return function (dispatch) {
    axios
      .get("/api/current_user")
      .then((res) => dispatch({ type: FETCH_USER, payload: res.data }));
  };
};

export const authenticate_user = () => {
  return function (dispatch) {
    axios.get("/auth/google").then((res) =>
      dispatch({
        type: AUTHENTICATE_USER,
        payload: res,
      })
    );
  };
};

// when it return true put this value in global sotre and then use it to rerender ;
