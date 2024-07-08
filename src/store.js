import { configureStore } from "@reduxjs/toolkit";
import hackerNewsReducer from "./reducers/hackerNewsReducer.js";

export default configureStore({
  reducer: hackerNewsReducer,
});
