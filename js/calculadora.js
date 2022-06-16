import "./operacoes"

var valor1;
var valor2;
var resultado;
var operacao;

$(document).ready(function(){
    //Atribuir valores
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
    $('#virgula').click(function(){
        valor(event, '.');
    });

    //Chamar Operações
    $('#zerar').click(function(event){
        event.preventDefault();
        zerar();
    });
    $('#inverter').click(function(event){
        event.preventDefault();
        $('#result').val(parseInt($('#result').val()) * (0 - 1));
    });
    $('#dividir').click(function(event){
        event.preventDefault();
        valor1 = parseInt($('#result').val())
        operacao = 'dividir';
        zerar();
    });
    $('#subtratir').click(function(event){
        event.preventDefault();
        valor1 = parseInt($('#result').val())
        operacao = 'subtrair';
        zerar();
    });
    $('#multiplicar').click(function(event){
        event.preventDefault();
        valor1 = parseInt($('#result').val())
        operacao = 'multiplicar';
        zerar();
    });
    $('#somar').click(function(event){
        event.preventDefault();
        valor1 = parseInt($('#result').val())
        operacao = 'somar';
        zerar();
    });
    $('#igual').click(function(event){
        event.preventDefault();
        valor2 = parseInt($('#resut').val);
        
    })

    //Tratamento de valores
    function valor(event, num) {
        event.preventDefault();
        console.log(num);
        $('#result').val($('#result').val() + num);
    }
    function zerar (){
        $('#result').val("");
    }
});

