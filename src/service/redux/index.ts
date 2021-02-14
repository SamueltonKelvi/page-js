import { createStore, combineReducers } from "redux";

const INITAL_STATE = {
  data: [],
};

const toReducers = (state = INITAL_STATE, action: any) => {
  const { type, payload } = action;
  const { data } = state;

  switch (type) {
    case "LOGIN":
      return { ...state, data: [data, payload] };
    default:
      return state;
  }
};

const reducers = combineReducers({
  toReducers,
});

const store = createStore(reducers);

const actions = {
  log: (data: any) => ({
    payload: data,
    type: "LOGIN",
  }),
};

export { store, actions };
