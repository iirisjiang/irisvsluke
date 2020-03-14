const iris = document.querySelector("#iris");
const luke = document.querySelector("#luke");
const reset = document.querySelector("#reset");

let iris_initial_score = 15;
let luke_initial_score = 12;

let iris_score = localStorage.getItem("iris_score") || iris_initial_score;
let luke_score = localStorage.getItem("luke_score") || luke_initial_score;

iris.innerText = "Iris " + iris_score;
luke.innerText = "Luke " + luke_score;

iris.onclick = () => {
  iris_score = parseInt(iris_score) + 1;
  localStorage.setItem("iris_score", iris_score);
  iris.innerText = "Iris " + iris_score;
};

luke.onclick = () => {
  luke_score = parseInt(luke_score) + 1;
  localStorage.setItem("luke_score", luke_score);
  luke.innerText = "Luke " + luke_score;
};

reset.onclick = () => {
  iris_score = iris_initial_score;
  localStorage.setItem("iris_score", iris_score);
  iris.innerText = "Iris " + iris_score;

  luke_score = luke_initial_score;
  localStorage.setItem("luke_score", luke_score);
  luke.innerText = "Luke " + luke_score;
};
