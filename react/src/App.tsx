import "./App.css";
import { useState } from "react";

const numbers = [1, 2, 3];

function App() {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount((count) => {
      return count + 1;
    });

    setCount((count) => {
      return count + 1;
    });

    setCount((count) => {
      return count + 1;
    });
  };

  return (
    <>
      <button onClick={clickHandler}>count: {count}</button>

      {numbers.map((x) => (
        <div key={x}>{x}</div>
      ))}
    </>
  );
}

export default App;
