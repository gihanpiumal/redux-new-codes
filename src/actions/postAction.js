import { FETCH_ALL_USER_ROLES } from "./types";
import * as api from "../api";

export const fetchUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUsers();
    dispatch({ type: FETCH_ALL_USER_ROLES, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
