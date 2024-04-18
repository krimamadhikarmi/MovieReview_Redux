import postReducer from "../reducers/movieReducers";
import { createStore } from "redux";

const store = createStore(postReducer);
export default store;
