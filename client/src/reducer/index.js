import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import filesReducer from "./fileReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  files: filesReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
