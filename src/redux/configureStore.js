import { combineReducers, createStore } from "redux";
import { Filters } from "./filters";
import { Header } from "./header";
import { Plants } from "./plants";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      filters: Filters,
      header: Header,
      plants: Plants,
    })
  );
  return store;
};
