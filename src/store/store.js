import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addTodo = createAction("ADD");
const deleteTodo = createAction("DELETE");

const reducer = createReducer([], {
  [addTodo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteTodo]: (state, action) =>
    state.filter((todo) => todo.id !== action.payload),
});

const store = configureStore({ reducer: reducer });

const actionCreators = {
  addTodo,
  deleteTodo,
};

export default store;

export { actionCreators };

// subscribe는 컴포넌트에서 사용
