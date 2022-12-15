import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { add, remove } from "../store/store";

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
    dispatch(add(text));
  }

  function onDeleteHandler(e) {
    console.log("remove");
    dispatch(remove(parseInt(e.target.parentNode.id)));
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
            <Link to={`/${todo.id}`}>{todo.text}</Link>
            <button onClick={onDeleteHandler}>Del</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
