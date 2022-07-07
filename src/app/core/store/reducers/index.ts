import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import * as fromRouter from "@ngrx/router-store";
import * as fromRouterReducers from "./router.reducer";
import * as fromLoginReducers from "./login.reducer";

export * from "./router.reducer";

// Feature by core module
export interface State {
  login: fromLoginReducers.LoginState;
  routerReducer: fromRouter.RouterReducerState<fromRouterReducers.RouterStateUrl>;
}

export const CORE_INITIAL_STATE: State = {
  login: {
    authorization: {},
    loginProcess: "",
    loginError: null,
  },
  routerReducer: {
    state: {
      url: "",
      params: {},
      queryParams: {},
    },
    navigationId: 0,
  },
};

export let reducers: ActionReducerMap<State>;
reducers = {
  login: fromLoginReducers.loginReducer,
  routerReducer: fromRouter.routerReducer,
};

export const getRouterState =
  createFeatureSelector<
    fromRouter.RouterReducerState<fromRouterReducers.RouterStateUrl>
  >("routerReducer");

export const getCoreState = createFeatureSelector<State>("core");
