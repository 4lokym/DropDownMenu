import "./style.css";

class Option {
  constructor(textContent, action, bgColor, height, textColor) {
    this._textContent = textContent;
    this._action = action;
    this._bgColor = bgColor;
    this._height = height;
    this._textColor = textColor;
  }
  get textContent() {
    return this._textContent;
  }
  get action() {
    return this._action;
  }
  get bgColor() {
    return this._bgColor;
  }
  get height() {
    return this._height;
  }
  get textcolor() {
    return this._textColor;
  }
}

// const dropDown = function activateDropDown(
//   anchor,
//   options,
//   x_offset = 0,
//   y_offset = 0,
// ) {

//   // if (!options) {
//   //   return;
//   // }

//   const point = document.createElement("div");
//   point.classList.add("point");

//   const reference = anchor.getBoundingClientRect();
//   const x = reference.left + reference.width / 2 + x_offset;
//   const y = reference.top + y_offset + reference.height;

//   point.style.left = x + "px";
//   point.style.top = y + "px";

//   document.querySelector("body").append(point);
//   // document.querySelector(".dropDownMenu").classList.toggle("hidden");
//   const container = document.querySelector(".dropDownMenu");

//   if(container.style.display === "none"){
//     container.style.display = "flex";
//   }else{
//     container.style.display = "none";
//   }

// };

const makeBlock = function makeBlockForDropDownList(option) {
  const block = document.createElement("button");
  block.textContent = option.textContent;
  block.addEventListener("click", option.action);
  block.style.border = "none";
  block.style.cursor = "pointer";
  block.style.backgroundColor = option._bgColor ? option.bgColor : "inherit";
  block.style.color = option.textColor ? option.textColor : "inherit";
  block.style.display = "grid";
  block.style.alignItems = "center";
  block.style.justifyContent = "center";

  block.style.width = "100%";
  block.style.height = option.height ? option.height : "2rem";

  return block;
};

const makeList = function makeDropDownList(
  options,
  width = "inherit",
  bgColor = "inherit",
  color = "inherit",
) {
  const dropDownList = document.createElement("div");
  dropDownList.classList.add("dropDownList");
  dropDownList.style.position = "absolute";
  dropDownList.style.display = "flex";
  dropDownList.style.flexDirection = "column";
  dropDownList.style.width = width;
  dropDownList.style.color = color;
  dropDownList.style.backgroundColor = bgColor;

  options.map((option) => {
    dropDownList.appendChild(makeBlock(option));
  });

  return dropDownList;
};

document.querySelector(".options").addEventListener("click", (event) => {
  event.target.parentNode.append(
    makeList([
      new Option("test", () => alert("test")),
      new Option("test", () => alert("test")),
    ]),
  );
});
