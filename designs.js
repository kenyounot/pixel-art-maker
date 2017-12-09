//grab canvas, height, and width
const table = document.getElementById("pixel_canvas");
const colorPicker = document.getElementById("colorPicker");
let gridHeight, gridWidth;
const sizePicker = document.querySelector("#sizePicker");

//add listener for submit button click
sizePicker.addEventListener("submit", function(e) {
    e.preventDefault();
    makeGrid();
});

//called to make the grid when submit is clicked
function makeGrid() {

  table.innerHTML = '';

  gridHeight = $("#input_height").val();
  gridWidth = $("#input_width").val();

  /*loops through height and height and width to add rows
  and cells, while also placing event listensers on the
  cells*/
  for (let i = 0; i < gridHeight; i++) {
    let row = table.insertRow(i);
    for (let j = 0; j < gridWidth; j++) {
      let cell = row.insertCell(j);

      cell.addEventListener("click", function(event) {
        cell.style.backgroundColor = colorPicker.value;
      });
    }
  }
}
