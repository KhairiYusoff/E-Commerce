import { loginFailure, loginStart, loginSuccess, logout } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  console.log("user", user);
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    console.log("res", res);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logoutUser = async (dispatch) => {
  dispatch(logout());
  try {
    await publicRequest.post("/auth/logout");
  } catch (error) {
    console.log(error);
  }
};
