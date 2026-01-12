import { useState } from "react";

function Counter() {
  // count が現在の値、setCount が更新関数
  const [count, setCount] = useState(0);

  // +1
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // -1
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>カウンター</h2>
      <p>現在の値：{count}</p>

      <button onClick={handleIncrement}>+1</button>
      <button onClick={handleDecrement}>-1</button>
    </div>
  );
}

export default Counter;
