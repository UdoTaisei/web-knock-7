import { useState } from "react";

function TodoList() {
  // 入力欄の文字列
  const [text, setText] = useState("");

  // リスト本体
  const [todos, setTodos] = useState([]);

  // 入力欄のイベント（文字が変わるたびに呼ばれる）
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // 追加ボタンのイベント
  const handleAdd = () => {
    // 空文字なら追加しない
    if (text.trim() === "") return;

    // 配列に追加
    setTodos([...todos, text]);

    // 入力欄を空に戻す
    setText("");
  };

  return (
    <div>
      <h2>TODOリスト</h2>

      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="TODOを入力"
      />
      <button onClick={handleAdd}>追加</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
