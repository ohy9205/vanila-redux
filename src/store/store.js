import { configureStore, createAction } from "@reduxjs/toolkit";

const addTodo = createAction("ADD");
const deleteTodo = createAction("DELETE");

const reducer = (state = [], action) => {
  switch (action.type) {
    case addTodo.type:
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteTodo.type:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

const store = configureStore({ reducer: reducer });

const actionCreators = {
  addTodo,
  deleteTodo,
};

export default store;

export { actionCreators };

// subscribe는 컴포넌트에서 사용
