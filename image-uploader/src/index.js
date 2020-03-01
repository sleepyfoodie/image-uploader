import React, { createContext, useReducer, useContext } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

const StateContext = createContext();
export const useStateValue = () => useContext(StateContext);

const initialState = {
  data: {},
  ui: { selectedFiles: [], userType: null, hasError: false, errorMsg: "" }
};

const reducer = (state, action) => {
    
};

const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

const app = (
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>
);

ReactDOM.render(app, document.getElementById("root"));

serviceWorker.unregister();
