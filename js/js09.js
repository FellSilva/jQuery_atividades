$(document).ready(function () {
    $("bot1").click(function () {
        var v1 = parseInt($("#campo1").val());
        var v1 = parseInt($("#campo2").val());
        var t = v1 + v2;
        alert("o resultado é " + t);
        $('h1').text('olá! o resultado da soma é ' + t + 'parabéns.');
    });
});