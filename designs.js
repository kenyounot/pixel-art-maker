let color, widthGrid, heightGrid;// Select color input
const tableGrid = $('#pixel_canvas');
const sizePicker = $('#sizePicker');



color = $('#colorPicker');
heightGrid = $('#input_height');
widthGrid = $('#input_width');

sizePicker.on('submit', function(event) {
    event.preventDefault();
    makeGrid();
});

function makeGrid() {
    
}
