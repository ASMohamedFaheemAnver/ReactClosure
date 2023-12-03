import "./App.css";
import { useRef, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  const onIncrease = () => {
    setCount((prvCount) => prvCount + 1);
  };

  countRef.current = count;

  const onAlert = () => {
    setTimeout(() => {
      alert(`Count after 2s is : ${countRef.current}`);
    }, 2000);
  };

  return (
    <div className="container">
      <p>Current count is : {count}</p>
      <button onClick={onAlert}>Alert</button>
      <button onClick={onIncrease}>Increase</button>
    </div>
  );
};

export default App;
