
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
        $('#result').val(parseFloat($('#result').val()) * (0 - 1));
    });
    $('#dividir').click(function(event){
        event.preventDefault();
        valor1 = parseFloat($('#result').val())
        operacao = 'dividir';
        console.log(valor1, operacao);
        zerar();
    });
    $('#subtrair').click(function(event){
        event.preventDefault();
        valor1 = parseFloat($('#result').val())
        operacao = 'subtrair';
        console.log(valor1, operacao);
        zerar();
    });
    $('#multiplicar').click(function(event){
        event.preventDefault();
        valor1 = parseFloat($('#result').val())
        operacao = 'multiplicar';
        console.log(valor1, operacao);
        zerar();
    });
    $('#somar').click(function(event){
        event.preventDefault();
        valor1 = parseFloat($('#result').val())
        operacao = 'somar';
        console.log(valor1, operacao);
        zerar();
    });
    $('#igual').click(function(event){
        event.preventDefault();
        valor2 = parseFloat($('#result').val());
        resultado = calculo(valor1, valor2, operacao);
        console.log(valor1, operacao, valor2, resultado);
        $('#result').val(resultado);
        var sinal = logs(operacao);
        var log = `<div>${valor1} ${sinal} ${valor2} = ${resultado}<br></div>`;
        $('span').append(log);
        console.log(log);
    });
    $('#porcentagem').click(function(event){
        event.preventDefault();
        valor2 = parseFloat($('#result').val());
        resultado = calculoPecent(valor1, valor2, operacao);
        console.log(valor1, operacao, valor2, resultado);
        $('#result').val(resultado);
        var sinal = logs(operacao);
        var log = `<div>${valor1} ${sinal} ${valor2}% = ${resultado}<br></div>`;
        $('span').append(log);
        console.log(log);
    });

    //Tratamento de valores
    function valor(event, num) {
        event.preventDefault();
        console.log(num);
        $('#result').val($('#result').val() + num);
    }
    function zerar (){
        $('#result').val("");
    }
    function logs(operacao) {
        switch (operacao) {
            case 'somar':
                return '+';
                break;
            case 'subtrair':
                return '-';
                break;
            case 'dividir':
                return '/';
                break;
            case 'multiplicar':
                return '*';
                break;
            default:
                break;
        }
    }
});

function calculo (valor1, valor2, operacao) {
    switch (operacao) {
        case 'somar':
            return valor1 + valor2;
            break;
        case 'subtrair':
            return valor1 - valor2;
            break;
        case 'dividir':
            return valor1 / valor2;
            break;
        case 'multiplicar':
            return valor1 * valor2;
            break;
        default:
            break;
    }
}
function calculoPecent(valor1, valor2, operacao) {
    switch (operacao) {
        case 'somar':
            return valor1 + (valor1 * (valor2 / 100));
            break;
        case 'subtrair':
            return valor1 - (valor1 * (valor2 / 100));
            break;
        case 'dividir':
            return valor1 / (valor1 * (valor2 / 100));
            break;
        case 'multiplicar':
            return valor1 * (valor1 * (valor2 / 100));
            break;
        default:
            break;
    }
}
