import produce from "immer";

import { DEFAULT_ACTION } from "./constants";
import { Action, ContainerState } from "./types";

export const initialState: ContainerState = {
  container: "App",
};

const appReducer = (state = initialState, action: Action) =>
  produce(state, (draft: ContainerState) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        draft.message = "Hello world";
        break;
      default:
        break;
    }
  });

export default appReducer;
