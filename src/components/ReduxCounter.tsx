import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterSelector } from "../store/redux/selectors";
import { decrement, increment } from "../store/redux/action";

const ReduxCounter: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector(counterSelector);

  return (
    <div>
      <h1>Redux</h1>
      <p>State Change : {Math.random()}</p>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>increase</button>
      <button onClick={() => dispatch(decrement())}>decrease</button>
    </div>
  );
};

export default ReduxCounter;
