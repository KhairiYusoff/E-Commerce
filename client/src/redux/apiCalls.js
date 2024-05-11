import {
  registerStart,
  registerSuccess,
  registerFailure,
  loginFailure,
  loginStart,
  loginSuccess,
  logout,
} from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    return res.data;
  } catch (err) {
    dispatch(loginFailure());
    throw err;
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
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
