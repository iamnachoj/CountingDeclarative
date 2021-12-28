import React, { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  function increase() {
    setCount(++count);
  }
  function decrease() {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(--count);
    }
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
