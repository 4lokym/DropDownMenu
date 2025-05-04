import "./style.css";

class Option {
  constructor(textContent, action) {
    this.textContent = textContent;
    this.action = action;
  }
  get textContent() {
    return this.textContent;
  }
  get action() {
    return this.action;
  }
}

const dropDown = function activateDropDown(
  anchor,
  options,
  x_offset = 0,
  y_offset = 0,
) {

  // if (!options) {
  //   return;
  // }

  const point = document.createElement("div");
  point.classList.add("point");

  const reference = anchor.getBoundingClientRect();
  const x = reference.left + reference.width / 2 + x_offset;
  const y = reference.top + y_offset + reference.height;

  point.style.left = x + "px";
  point.style.top = y + "px";

  document.querySelector("body").append(point);
  
};

document.querySelector(".options").addEventListener("click", (event) => {
  dropDown(event.target);
});
