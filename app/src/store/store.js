import { applyMiddleware, createStore } from "redux";
import { reducer } from "../reducers/reducer";
import { devToolsEnhancer } from "redux-devtools-extension";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
const initialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // devToolsEnhancer({ trace: true }),
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
