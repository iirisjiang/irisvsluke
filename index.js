const iris = document.querySelector("#iris");
const luke = document.querySelector("#luke");

let iris_score = 15;
let luke_score = 12;

iris.innerText = iris_score;
luke.innerText = luke_score;

iris.onclick = () => {
  iris_score = iris_score + 1;
  iris.innerText = iris_score;
};

luke.onclick = () => {
  luke_score = luke_score + 1;
  luke.innerText = luke_score;
};
