import { combineReducers } from "redux";
import { burgerMenuReducer } from "./burgerMenu/burgerMenuReducer";
import { api } from "./requests/apiRequests";
import { apiRate } from "./requests/apiRate";
import { formReducer } from "./formForOrderHouse/formReducer";

export const rootReducer = combineReducers({
  burgerMenu: burgerMenuReducer,
  form:formReducer,
  [api.reducerPath]: api.reducer,
  [apiRate.reducerPath]: apiRate.reducer,
});
