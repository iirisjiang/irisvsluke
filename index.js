import { h, app } from "https://unpkg.com/hyperapp/src/index.js";
import domz from "https://unpkg.com/domz";

const { body, button, h1, p } = domz(h);

const initial_state = {
  luke: 12,
  iris: 15,
};

// These are "actions" (or update functions) they take
// the old state and return a new state

const reset = () => {
  localStorage.setItem("luke_score", initial_state.luke);
  localStorage.setItem("iris_score", initial_state.iris);
  return initial_state;
};

const increment = name => state => {
  const new_score = parseInt(state[name]) + 1;
  localStorage.setItem(name + "_score", new_score);
  return {
    ...state,
    [name]: new_score,
  };
};

app({
  init: {
    luke: localStorage.getItem("luke_score") || initial_state.luke,
    iris: localStorage.getItem("iris_score") || initial_state.iris,
  },
  view: state =>
    body([
      button({ id: "iris", onclick: increment("iris") }, [
        h1(state.iris),
        p("Iris"),
      ]),
      button({ id: "luke", onclick: increment("luke") }, [
        h1(state.luke),
        p("Luke"),
      ]),
      button({ id: "reset", onclick: reset }, "reset"),
    ]),
  node: document.body,
});

// const iris_button = document.querySelector("#iris");
// const luke_button = document.querySelector("#luke");

// const iris_label = document.querySelector("#iris h1");
// const luke_label = document.querySelector("#luke h1");

// const reset_button = document.querySelector("#reset");

// let iris_initial_score = 15;
// let luke_initial_score = 12;

// let iris_score = localStorage.getItem("iris_score") || iris_initial_score;
// let luke_score = localStorage.getItem("luke_score") || luke_initial_score;

// iris_label.innerText = iris_score;
// luke_label.innerText = luke_score;

// iris_button.onclick = () => {
//   iris_score = parseInt(iris_score) + 1;
//   localStorage.setItem("iris_score", iris_score);
//   iris_label.innerText = iris_score;
// };

// luke_button.onclick = () => {
//   luke_score = parseInt(luke_score) + 1;
//   localStorage.setItem("luke_score", luke_score);
//   luke_label.innerText = luke_score;
// };

// reset_button.onclick = () => {
//   iris_score = iris_initial_score;
//   localStorage.setItem("iris_score", iris_score);
//   iris_label.innerText = iris_score;

//   luke_score = luke_initial_score;
//   localStorage.setItem("luke_score", luke_score);
//   luke_label.innerText = luke_score;
// };
