import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../Features/counterSlice";

export default function Todo() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button className="btn" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button className="btn" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
}
