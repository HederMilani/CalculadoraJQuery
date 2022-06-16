var num1;
var num2;
var operacao;

$(document).ready(function(){
    $('#num9').click(function(){
        valor(event, 9);
    });

    function valor(event, num) {
        event.preventDefault();
        console.log(num);
        $('#resultado').val = num;
    }
});

