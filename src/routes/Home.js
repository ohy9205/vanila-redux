import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../store/store";

function Home() {
  const [text, setText] = useState("");
  // store에서 데이터 가져오기
  const todos = useSelector((state) => state);
  // store에 데이터 전달
  const dispatch = useDispatch();

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    setText("");
    dispatch(actionCreators.addTodo(text));
  }

  function onDeleteHandler(e) {
    dispatch(actionCreators.deleteTodo(parseInt(e.target.parentNode.id)));
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} id={todo.id}>
            {todo.text}
            <button onClick={onDeleteHandler}>Del</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
