import { useEffect, useState } from "react";

function EffectSample() {
  const [count, setCount] = useState(0);

  // マウント時 []:初回だけ
  useEffect(() => {
    console.log("コンポーネントがマウントされました");
  }, []);

  // count が変わったとき [count]:countが変わったとき
  useEffect(() => {
    console.log("count が更新されました：", count);
  }, [count]);

  return (
    <div>
      <h2>useEffect サンプル</h2>
      <p>count: {count}</p>

      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
}

export default EffectSample;
