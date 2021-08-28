import { PLANTS } from "../shared/plants";
import { EXPLAINERS } from "../shared/explainers";

EXPLAINERS.forEach(function (explainer, index) {
  PLANTS.splice(
    Math.floor(Math.random() * PLANTS.length) + index * 3,
    0,
    explainer
  );
});

export const Plants = (state = PLANTS, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
