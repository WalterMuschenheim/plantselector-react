import { PLANTS } from "../shared/plants";
import { EXPLAINERS } from "../shared/explainers";

export const initialState = {
  plants: PLANTS,
  explainers: EXPLAINERS,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
