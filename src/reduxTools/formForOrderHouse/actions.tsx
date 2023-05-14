export const CHANGE_FORM_STATE = "CHANGE_FORM_STATE";
export const CLOSE_FORM = "CLOSE_FORM";

export interface FormAction {
  type: "CHANGE_FORM_STATE" | "CLOSE_FORM";
}

export const changeFormStateAction = (): FormAction => {
  return {
    type: CHANGE_FORM_STATE,
  };
};

export const closeFormStateAction = (): FormAction => {
  return {
    type: CLOSE_FORM,
  };
};
