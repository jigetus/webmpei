import { Action } from "redux";

const initialState = {
  test: "1234"
};

export interface IApp {
  test: string;
}
export const appReducer = (state: IApp = initialState, action: Action) => {
  return state;
};
