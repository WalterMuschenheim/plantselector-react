import * as ActionTypes from "./ActionTypes";

export const addCriteria = (type, criterium) => {
  return { type: ActionTypes.ADD_CRITERIUM, payload: [type, criterium] };
};

export const removeCriteria = (criterium) => {
  return { type: ActionTypes.REMOVE_CRITERIUM, payload: criterium };
};

export const clearCriteria = (type) => {
  return { type: ActionTypes.CLEAR_CRITERIUM, payload: type };
};

export const updateSearch = (searchTerms) => {
  return { type: ActionTypes.UPDATE_SEARCH, payload: searchTerms };
};
