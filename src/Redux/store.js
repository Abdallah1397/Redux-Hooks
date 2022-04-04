import { createStore } from "redux";
import rootReducers from "./reducers/rootReducers";


// define an enhancer
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
// Store object contains Reducer & State 
const store = createStore(rootReducers, enhancer());

export default store;