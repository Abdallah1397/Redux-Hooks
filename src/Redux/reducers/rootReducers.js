import { combineReducers } from "redux";
import CounterReducer from "./counter";


const rootReducers = combineReducers({
    countReducer: CounterReducer,
})
export default rootReducers;