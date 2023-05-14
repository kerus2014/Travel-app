import { combineReducers } from "redux";
import { burgerMenuReducer } from "./burgerMenu/burgerMenuReducer";
import { houseData } from "./requests/requests";
import { formReducer } from "./formForOrderHouse/formReducer";

export const rootReducer = combineReducers({
  burgerMenu: burgerMenuReducer,
  form:formReducer,
  [houseData.reducerPath]: houseData.reducer,
});
