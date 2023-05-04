import { combineReducers } from "redux";
import { burgerMenuReducer } from "./burgerMenu/burgerMenuReducer";
import { houseData } from "./requests/requests";

export const rootReducer = combineReducers({
  burgerMenu: burgerMenuReducer,
  [houseData.reducerPath]: houseData.reducer,
});
