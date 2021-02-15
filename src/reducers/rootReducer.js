import { combineReducers } from "redux";
import temperatureReducer from "./temperatureReducer";

const rootReducer = combineReducers({
  temperature: temperatureReducer,
});

export default rootReducer;
