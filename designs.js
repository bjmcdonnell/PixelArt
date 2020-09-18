//Definine constants for 4 interactice DOM elements in HTML
const table = document.getElementById("pixelCanvas");
const color = document.getElementById("colorPicker");
const height = document.getElementById("inputHeight");
const width = document.getElementById("inputWidth");
var blocks = [];
let pickedColor = "#000000";

//Use event listener for Submit button to accept table parameters based on user's input of height and width values
tableSize.addEventListener('submit', function (event) {
  event.preventDefault();
  const h = height.value;
  const w = width.value;
  table.innerHTML = '';
  makeGrid(h, w);
}
);

//Capture user-defined color choice from color picker interface
color.addEventListener('input', function () {
  pickedColor = color.value;
  console.log(pickedColor);
});

//build dynamic table using function and nested "for loops" to generate tr and td scales based on "h" and "w" values defined by user
function makeGrid(height, width) {
  for (r=0; r<height; r++) {
    let tableRow = table.appendChild(document.createElement('tr'));
    for (c=0; c<width; c++) {
      let tableCell = tableRow.appendChild(document.createElement('td'));
    };
  };

//define td cells with assigned indexed values in order to associate clicks to specific cell locations w/ "block" as td children of tr
  blocks = document.getElementsByTagName('td');
  for (let block of blocks){
  block.addEventListener('click', function(){
    setColor(block.cellIndex+block.parentElement.rowIndex*width);
  });
};

//assign pickedColor to selected table cell upon user click
function setColor(i){
  blocks[i].style.background=pickedColor;
}
}
