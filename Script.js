function gerarTabuada() {
    var numero = parseInt(document.getElementById("numero").value);
    var resultado = document.getElementById("resultado");

    //para verificar se o usuário digitou algo

    if (isNaN(numero)) {
        resultado.innerHTML = "Por favor digite um número válido.";
        return;
    }

    //para montar a tabuada

    var tabuada = "";
    for (var i = 1; i <= 10; i++) {
        tabuada += numero + " x " + i + " = " + (numero * i) + "<br>";
    }

    resultado.innerHTML = tabuada;
}
