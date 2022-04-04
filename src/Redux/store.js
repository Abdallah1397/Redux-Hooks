import { createStore } from "redux";
import CounterReducer from "./reducers/counter";

// Store object contains Reducer & State 
const store = createStore(CounterReducer);

export default store;