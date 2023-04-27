import { combineReducers } from "redux";
import { burgerMenuReducer } from "./burgerMenu/burgerMenuReducer";

export const rootReducer = combineReducers({
  burgerMenu:burgerMenuReducer,
});
