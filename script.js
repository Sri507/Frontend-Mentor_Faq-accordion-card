const question = document.querySelectorAll(".question");
const sign = document.querySelectorAll("#sign");
const answer = document.querySelectorAll(".answer");

for (let i = 0; i < sign.length; i++) {
  document.addEventListener("click", function (e) {
    if (e.target == question[i] || e.target == sign[i]) {
      if (question[i].classList.contains("active")) {
        answer[i].style.height = "0px";
        answer[i].style.overflow = `hidden`;
        sign[i].style.transition = `ease-in-out 0.3s`;
        sign[i].src = `./assets/images/icon-plus.svg`;
        question[i].classList.remove("active");
        if (i == sign.length - 1) {
          answer[i].style.paddingTop = `0px`;
        } else {
          answer[i].style.paddingBottom = `0px`;
        }
      } else {
        answer[i].style.height = `auto`;
        sign[i].style.transition = `ease-in-out 0.3s`;
        sign[i].src = `./assets/images/icon-minus.svg`;
        question[i].classList.add("active");
        if (i == sign.length - 1) {
          answer[i].style.paddingTop = `24px`;
        } else {
          answer[i].style.paddingBottom = `24px`;
        }
      }
    }
  });
}
