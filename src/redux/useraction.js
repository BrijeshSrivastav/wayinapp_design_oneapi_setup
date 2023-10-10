import { ActionTypes } from "../redux/constants/action-types";

export const setUserList = (data) => {
    //alert(JSON.stringify(data))
  return {
    type: ActionTypes.SET_USER_LIST,
    payload: data,
  };
};

export const getUserList = (data) => {
  //alert(JSON.stringify(data))
return {
  type: ActionTypes.GET_USER_LIST,
  payload: data,
};
};

export const errorUserList = (data) => {
  //alert(JSON.stringify(data))
return {
  type: ActionTypes.SET_USER_LIST_ERROR,
  payload: data,
};
};