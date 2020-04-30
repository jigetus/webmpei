export const APP_USER_LOGGED = "APP_DATA_LOADED";
export const APP_SET_USER_INFO = "APP_SET_USER_INFO";

export interface IUserInfo {
  login: string;
  name: string;
  last_name: string;
  middle_name: string;
  group_name: string;
}

export interface IApp {
  isLogged: boolean;
  user: IUserInfo | null;
}

interface UserLogged {
  type: typeof APP_USER_LOGGED;
  payload: null;
}

interface SetUserInfo {
  type: typeof APP_SET_USER_INFO;
  payload: IUserInfo;
}

export type AppActionTypes = UserLogged | SetUserInfo;
