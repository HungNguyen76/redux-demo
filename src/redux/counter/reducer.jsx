import { INCREASE, DECREASE } from "./constants";

export const initState = 0;

const countReducer = (state = initState, action) => {
  switch (action.type) {
    case INCREASE:
      state = state + 1
      return state
    case DECREASE:
      state = state - 1;
      return state
    default:
      return state;
  }
};
export default countReducer;
