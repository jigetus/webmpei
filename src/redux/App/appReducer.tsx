import {
  APP_SET_USER_INFO,
  APP_USER_LOGGED,
  AppActionTypes,
  IApp
} from "./types";

const initialState = {
  isLogged: false,
  user: null
};

export const appReducer = (
  state: IApp = initialState,
  action: AppActionTypes
): IApp => {
  switch (action.type) {
    case APP_USER_LOGGED:
      return { ...state, isLogged: true };

    case APP_SET_USER_INFO:
      return { ...state, user: action.payload };
  }
  return state;
};
