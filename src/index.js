import "./style.css";

class Option {
  constructor(textContent, action) {
    this._textContent = textContent;
    this._action = action;
  }
  get textContent() {
    return this._textContent;
  }
  get action() {
    return this._action;
  }
}

const dropDown = function activateDropDown(
  anchor,
  options,
  gap,
  x_offset = 0,
  y_offset = 0,
) {

  // if (!options) {
  //   return;
  // }

  const point = document.createElement("div");
  point.classList.add("point");

  const reference = anchor.getBoundingClientRect();
  // const x = reference.left + reference.width / 2 + x_offset;
  // const y = reference.top + y_offset + reference.height;
  const x = (reference.width / 2) + "px";

  point.style.left = x + "px";
  point.style.top =  "100px";
  point.style.width = reference.width + 'px';

  options.map(function createAndAddAnOptionOnTheDropDownMenu(option){
    const button = document.createElement("button");
    button.classList.add("option");
    button.textContent = option.textContent;
    button.addEventListener("click", option.action);
  });

  anchor.append(point);
};

const testOption = new Option("test", () => alert("ciao"));

document.querySelector(".options").addEventListener("click", (event) => {
  dropDown(event.target, [testOption]);
});
