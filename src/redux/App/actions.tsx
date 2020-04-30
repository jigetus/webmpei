import {
  APP_SET_USER_INFO,
  APP_USER_LOGGED,
  AppActionTypes,
  IUserInfo
} from "./types";

export function UserLogged(): AppActionTypes {
  return {
    type: APP_USER_LOGGED,
    payload: null
  };
}

export function SetUserInfo(info: IUserInfo) {
  return {
    type: APP_SET_USER_INFO,
    payload: info
  };
}
