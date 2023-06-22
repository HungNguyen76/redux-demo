import React, { useReducer } from "react";
import countReducer, { initState } from '../redux/counter/reducer';
import { increase, decrease } from "../redux/counter/action";

export default function Counter() {
  const [count, dispatch] = useReducer(countReducer, initState);

  return (
    <div>
      <h3>Counter</h3>
      <p>{count}</p>
      <button onClick={() => dispatch(increase())}>Up</button>
      <button onClick={() => dispatch(decrease())}>Down</button>
    </div>
  );
}
