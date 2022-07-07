import * as fromFeature from "../reducers";
import { createSelector } from "@ngrx/store";

// selectors

export const getTokenState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.State) => {
    return state.login.authorization ? state.login.authorization?.token : "";
  }
);
