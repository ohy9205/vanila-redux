import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();

  const todos = useSelector((state) => state);
  const todo = todos.find((todo) => todo.id === parseInt(id));

  return (
    <div>
      <h1>Detail</h1>
      <p>{todo?.text}</p>
      <p>created at" {Date(todo.id)}</p>
    </div>
  );
}

export default Detail;
