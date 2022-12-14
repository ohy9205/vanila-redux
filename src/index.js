import { createStore } from "redux";
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const count = document.querySelector("#count");

const ADD = "ADD";
const MINUS = "MINUS";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return ++state;
    case MINUS:
      return --state;
    default:
      return state;
  }
};
const store = createStore(reducer);

const onChange = () => {
  count.innerText = store.getState();
};

store.subscribe(onChange);

plus.addEventListener("click", (e) => {
  store.dispatch({ type: ADD });
});
minus.addEventListener("click", (e) => {
  store.dispatch({ type: MINUS });
});
