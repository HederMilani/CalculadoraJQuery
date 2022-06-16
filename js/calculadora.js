//const { event } = require("jquery");

var num1;
var num2;
var operacao;

$(document).ready(function(){
    $('#num9').click(function(){
        valor(event, 9);
    });
    $('#num8').click(function(){
        valor(event, 8);
    });
    $('#num7').click(function(){
        valor(event, 7);
    });
    $('#num6').click(function(){
        valor(event, 6);
    });
    $('#num5').click(function(){
        valor(event, 5);
    });
    $('#num4').click(function(){
        valor(event, 4);
    });
    $('#num3').click(function(){
        valor(event, 3);
    });
    $('#num2').click(function(){
        valor(event, 2);
    });
    $('#num1').click(function(){
        valor(event, 1);
    });
    $('#num0').click(function(){
        valor(event, 0);
    });
    $('#num00').click(function(){
        valor(event, '00');
    });

    function valor(event, num) {
        event.preventDefault();
        console.log(num);
        $('#result').val($('#result').val() + num);
    }
});

