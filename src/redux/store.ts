import { createStore, combineReducers } from "redux";
import appReducer from "../containers/App/reducer";

/**
 * Register your container components' reducers here
 */
export default createStore(combineReducers({ app: appReducer }));
