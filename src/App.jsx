import { useState } from "react";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addOne, reduceOne } from "../src/redux/CounterSlice/counterSlice";
function App() {
  const data = useSelector((s) => s);
  const dispatch = useDispatch();
  console.log(data);
  return (
    <>
      <div>
        <h1>Counter app</h1>
        <p>Count {data.conuter.count}</p>
        <button
          onClick={() => {
            dispatch(addOne());
          }}
        >
          ++++
        </button>
        <button
          onClick={() => {
            dispatch(reduceOne());
          }}
        >
          ----
        </button>
      </div>
    </>
  );
}

export default App;
