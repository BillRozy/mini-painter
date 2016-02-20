

var number = 64;
var canvasSize = 512;
var $selector = $('#canvas');
$(document).ready(function(){
        $('body').prepend("<h1>Painter</h1>");
        for (var i =0; i < number; i++)
        {
            for (var j =0; j < number; j++)
                {
                $('#canvas').append("<div class = pixel style = \"height:" + canvasSize/number +"px; width:"+canvasSize/number+"px;\"></div>");
              
                    console.log("Add");
                }
        }

    $('#canvas').mousedown(function(){
    $('.pixel').mousemove(function()
        {$(this).css('background', getColor);
        
    });});
        
        
    
    $('#button').click(clear);
    
    });

function clear()
{
    var newNumber = prompt("Введите размерность нового холста");
    $('#canvas').empty();
    fillGrid(newNumber);
    
}

function fillGrid(number)
{
        for (var i =0; i < number; i++)
            {
            for (var j =0; j < number; j++)
                {
                $('#canvas').append("<div class = pixel style = \"height:" + canvasSize/number +"px; width:"+canvasSize/number+"px;\"></div>");
                }
            }
            $('.pixel').mousemove(function()
        {$(this).css('background',getColor);});
                    
}

function getColor()
{
    var red = Math.floor(Math.random() * 256);
     var green = Math.floor(Math.random() * 256);
     var blue = Math.floor(Math.random() * 256);
    return 'rgb(' + red +',' + green + ',' + blue +')';
}

