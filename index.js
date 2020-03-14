const iris_button = document.querySelector("#iris");
const luke_button = document.querySelector("#luke");

const iris_label = document.querySelector("#iris h1");
const luke_label = document.querySelector("#luke h1");

const reset_button = document.querySelector("#reset");

let iris_initial_score = 15;
let luke_initial_score = 12;

let iris_score = localStorage.getItem("iris_score") || iris_initial_score;
let luke_score = localStorage.getItem("luke_score") || luke_initial_score;

iris_label.innerText = iris_score;
luke_label.innerText = luke_score;

iris_button.onclick = () => {
  iris_score = parseInt(iris_score) + 1;
  localStorage.setItem("iris_score", iris_score);
  iris_label.innerText = iris_score;
};

luke_button.onclick = () => {
  luke_score = parseInt(luke_score) + 1;
  localStorage.setItem("luke_score", luke_score);
  luke_label.innerText = luke_score;
};

reset_button.onclick = () => {
  iris_score = iris_initial_score;
  localStorage.setItem("iris_score", iris_score);
  iris_label.innerText = iris_score;

  luke_score = luke_initial_score;
  localStorage.setItem("luke_score", luke_score);
  luke_label.innerText = luke_score;
};
