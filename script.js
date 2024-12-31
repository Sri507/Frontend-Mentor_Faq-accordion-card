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
// const accordions = document.querySelectorAll(".word-container");
// console.log(accordions);
// // console.log(accordions, accordions[0].children[0], accordions[0].children[1]);
// accordions.forEach((accordion) => {
//   // console.log(accordion.children);
//   const header = accordion.querySelector(".question");
//   const contentId = accordion.children[1].getAttribute("aria-controls");
//   const content = document.getElementById(contentId);
//   console.log(header, contentId, content);
//   accordion.setAttribute("aria-expanded", "false");

//   // Add event listener to header focus and keydown events
//   header.addEventListener("focus", (event) => {
//     // Toggle accordion state on Enter or Space press
//     if (event.key === "ArrowRight" || event.key === "  ") {
//       content.focus();
//     }
//   });
//   accordion.addEventListener("keydown", (event) => {
//     // Move focus forward/backward using Tab/Shift+Tab
//     if (event.key === "ArrowDown") {
//       // Move focus to next accordion header
//       const nextAccordion = accordions[accordions.indexOf(accordion) + 1];
//       nextAccordion.focus();
//     } else if (event.key === "ArrowUp") {
//       // Move focus to previous accordion header
//       const prevAccordion = accordions[accordions.indexOf(accordion) - 1];
//       prevAccordion.focus();
//     }
//   });
// });
// if (question[i].classList.contains("active")) {
//   answer[i].style.height = "0px";
//   answer[i].style.overflow = `hidden`;
//   sign[i].style.transition = `ease-in-out 0.3s`;
//   sign[i].src = `./assets/images/icon-plus.svg`;
//   question[i].classList.remove("active");
//   if (i == sign.length - 1) {
//     answer[i].style.paddingTop = `0px`;
//   } else {
//     answer[i].style.paddingBottom = `0px`;
//   }
// } else {
//   answer[i].style.height = `auto`;
//   sign[i].style.transition = `ease-in-out 0.3s`;
//   sign[i].src = `./assets/images/icon-minus.svg`;
//   question[i].classList.add("active");
//   if (i == sign.length - 1) {
//     answer[i].style.paddingTop = `24px`;
//   } else {
//     answer[i].style.paddingBottom = `24px`;
//   }
// }

// document.addEventListener("keydown", function (e) {
//   console.log(e.target);
//   const prediv = question[0];
//   prediv.focus();
//   const activeDiv = document.activeElement;
//   console.log(activeDiv);
// });
// document.addEventListener("keydown", (e) => {
//   console.log(e.key);
//   question[0].style.focus = "red";
//   console.log(document.activeElement);
// });

// document.addEventListener("keydown", (e) => {
//   if (e.key === "ArrowUp" || e.key === "ArrowDown") {
//     const focusedDiv = document.activeElement;
//     const nextDiv = getAdjacentDiv(focusedDiv, e.key === "ArrowUp" ? -1 : 1);
//     if (nextDiv) {
//       nextDiv.focus();
//     }
//   }
// });

// function getAdjacentDiv(element, direction) {
//   //   const parent = element.parentNode;
//   //   const siblings = Array.prototype.slice.call(parent.children);
//   const index = question.indexOf();
//   if (direction === -1) {
//     return siblings[index - 1] || siblings[siblings.length - 1];
//   } else {
//     return siblings[index + 1] || siblings[0];
//   }
// }

// for (let i = 0; i < sign.length; i++) {
//   question[i].addEventListener("keydown", (event) => {
//     const keyCode = event.keyCode;

//     if (keyCode === 13 || keyCode === 32) {
//       // Enter or Space
//       question[i].toggle("active");
//     } else if (keyCode === 37 || keyCode === 38) {
//       // Left or Up arrow
//       // Move focus to previous accordion
//       const previousAccordion = question[question.indexOf(accordion) - 1];
//       previousAccordion.focus();
//     } else if (keyCode === 39 || keyCode === 40) {
//       // Right or Down arrow
//       // Move focus to next accordion
//       const nextAccordion = question[question.indexOf(accordion) + 1];
//       nextAccordion.focus();
//     }
//   });
// }
