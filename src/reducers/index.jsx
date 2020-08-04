import { creactReducer } from "@reduxjs/toolkit";

const state  = 0;

export default creactReducer(state, {
  "increase": (state, action) => ({ state: state + 1 }),
  "decrease": (state, action) => ({ state: state - 1 }),
  "unmountCounter": (state, action) => ({ state: state - action.count }),
});
