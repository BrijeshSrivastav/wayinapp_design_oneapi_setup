import { ActionTypes } from "../redux/constants/action-types";
const intialState = {
  isloding: false,
  userList: [],
  error:"",
};

export const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_USER_LIST:
      console.log("action.payload "+JSON.stringify(action.payload))
      return { ...state, isloding: action.payload };
    case ActionTypes.SET_USER_LIST:
      console.log("action.payload "+JSON.stringify(action.payload))
      return { ...state, 
        isloding:false,
        userList: action.payload };
      case ActionTypes.SET_USER_LIST_ERROR:
        console.log("action.payload "+JSON.stringify(action.payload))
        return { ...state, error: action.payload };
    default:
      return state;
  }
};