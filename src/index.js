import { createStore } from "redux";
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const count = document.querySelector("#count");

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "PLUS":
      return ++state;
    case "MINUS":
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
  store.dispatch({ type: "PLUS" });
});
minus.addEventListener("click", (e) => {
  store.dispatch({ type: "MINUS" });
});
