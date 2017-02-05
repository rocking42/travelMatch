import {
  ready,
  inputMerge
} from "./result";
// When the button is pressed initiate the results callback
const button = document.querySelector("button");
button.addEventListener("click", inputMerge);
