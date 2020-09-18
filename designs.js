const tableSize = document.getElementById("sizePicker");
const table = document.getElementById("pixelCanvas");
const color = document.getElementById("colorPicker");
const height = document.getElementById("inputHeight");
const width = document.getElementById("inputWidth");
var blocks = [];
let pickedColor = "#000000";

tableSize.addEventListener('submit', function (event) {
  event.preventDefault();
  const h = height.value;
  const w = width.value;
  table.innerHTML = '';
  makeGrid(h, w);
}
);
color.addEventListener('input', function () {
  pickedColor = color.value;
  console.log(pickedColor);
});
//table.addEventListener('click', respondToTheClick);

function makeGrid(height, width) {
  for (r=0; r<height; r++) {
    let tableRow = table.appendChild(document.createElement('tr'));
    for (c=0; c<width; c++) {
      let tableCell = tableRow.appendChild(document.createElement('td'));
      //addEventListener("click",function(){
        //document.getElementsByTagName("td")[r * width + c].style.backgroundColor=pickedColor
      //}
    //);
    };
  };
  blocks = document.getElementsByTagName('td');
  for (let block of blocks){
  block.addEventListener('click', function(){
    setColor(block.cellIndex+block.parentElement.rowIndex*width);
  });
};
function setColor(i){
  blocks[i].style.background=pickedColor;
}
}





//SAVED 9.14 w/ Paul -- function makeGrid(height, width) {
  //for (r=0; r<height; r++) {
    //let tableRow = table.appendChild(document.createElement('tr'));
    //for (c=0; c<width; c++) {
      //let tableCell = tableRow.appendChild(document.createElement('td'));
      //addEventListener("click",function(){
        //document.getElementsByTagName("td")[(r*(r+1))+c].style.backgroundColor=pickedColor
    //  });
    //};
  //};
//}
//addEventListener('click', function(){

        //document.getElementsByTagName("td")[4].style.backgroundColor="#000000"
        //setcolor (tableCell.style.backgroundColor)
    //  };
      //add event listener here for each cell


console.log(pickedColor);
//function respondToTheClick(evt) {
//  if (evt.target.nodename === 'td') {
//let cellColor = color.value;
//event.target.style.backgroundColor = cellColor;
