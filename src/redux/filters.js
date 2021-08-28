import * as ActionTypes from "./ActionTypes";

export const Filters = (
  state = {
    criteria: [],
    searchValue: "",
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_CRITERIUM:
      const newCriterium = action.payload;
      state.criteria = { ...state.criteria, newCriterium };
      return state;
    case ActionTypes.REMOVE_CRITERIUM:
      const rValue = action.payload;
      state.criteria = state.criteria.filter(
        (currentVal) => currentVal[1] !== rValue
      );
      return state;
    case ActionTypes.CLEAR_CRITERIUM:
      const cValue = action.payload;
      state.criteria = state.criteria.filter(
        (currentVal) => currentVal[0] !== cValue
      );
      return state;
    case ActionTypes.UPDATE_SEARCH:
      state.searchValue = action.payload;
      return state;
    default:
      return state;
  }
};
