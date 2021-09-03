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
      console.log(state);
      const newCriterium = action.payload;
      const addCriteria = [...state.criteria, newCriterium];
      console.log({ ...state, criteria: addCriteria });
      return { ...state, criteria: addCriteria };
    case ActionTypes.REMOVE_CRITERIUM:
      const rValue = action.payload;
      const removeCriteria = state.criteria.filter(
        (currentVal) => currentVal[1] !== rValue
      );
      return { ...state, criteria: removeCriteria };
    case ActionTypes.CLEAR_CRITERIUM:
      const cValue = action.payload;
      const clearCriteria = state.criteria.filter(
        (currentVal) => currentVal[0] !== cValue
      );
      return { ...state, criteria: clearCriteria };
    case ActionTypes.UPDATE_SEARCH:
      const searchValue = action.payload;
      return { ...state, searchValue: searchValue };
    default:
      return state;
  }
};
