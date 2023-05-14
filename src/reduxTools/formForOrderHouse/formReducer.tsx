import { FormAction, CHANGE_FORM_STATE, CLOSE_FORM } from "./actions";

interface FormState {
  isFormOpen: boolean;
}

const defaultState: FormState = {
  isFormOpen: false,
};

export const formReducer = (
  state: FormState = defaultState,
  action: FormAction
): FormState => {
  switch (action.type) {
    case CHANGE_FORM_STATE:
      return {
        ...state,
        isFormOpen: !state.isFormOpen,
      };
    case CLOSE_FORM:
      return {
        ...state,
        isFormOpen: false,
      };
    default:
      return state;
  }
};
