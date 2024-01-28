console.log("it is linked");

let screen = document.querySelector(".screen");

let buttons = document.querySelectorAll(".buttons");

// buttons.addEventListener("click", (e) => {
//   console.log("You have been clicked");
// });

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    // console.log("I have been clicked");

    let buttonText = e.target.textContent;

    screen.textContent = buttonText;
    console.log("button clicked is.. ", buttonText);
  });
}
