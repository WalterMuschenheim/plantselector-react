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

export const collapseHandler = () => {
  return { type: ActionTypes.COLLAPSE };
};

export const updateGuideHeight = (rectHeight) => {
  return { type: ActionTypes.UPDATE_GUIDE_HEIGHT, payload: rectHeight };
};

export const updateNavHeight = (rectHeight) => {
  return { type: ActionTypes.UPDATE_NAV_HEIGHT, payload: rectHeight };
};

export const updateSticky = (isSticky) => {
  return { type: ActionTypes.UPDATE_STICKY, payload: isSticky };
};
