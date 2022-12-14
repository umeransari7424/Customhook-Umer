import React from "react";
import useCounter from "./useCounter";

function Counter() {
  const [count, handleincrement, handleDecrement] = useCounter(0);

  return (
    <div className="counter">
      <div className="container text-center py-5 mt-5">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="py-5">
              <h1>React Custom Hooks</h1>
            </div>
            <div>
              <h1>{count}</h1>
            </div>{" "}
            <br />
            <div>
              <button className="btn btn-primary" onClick={handleincrement}>
                Increment
              </button>{" "}
              &nbsp; &nbsp;
              <button className="btn btn-primary" onClick={handleDecrement}>
                Decrement
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
