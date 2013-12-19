matrix_x = 12;
matrix_y = 12;
matrixAmount = matrix_x * matrix_y;

matrix_size = 100;

for(i=0;i<matrix_x;i++){
  for(y=0;y<matrix_y;y++){
    $('.boxcontainer').append("<div class='box'><div class='led' id='led"+i+"-"+y+"'></div></div>");
  }
}
$('.boxcontainer').css("width", matrix_x * matrix_size + "px");
$('.boxcontainer').css("height", matrix_y * matrix_size + "px");

function doPixel(ledid,color){
  $("#led"+ledid).css("backgroundColor", color);
}