function combustivel () {
    // Declaração de variaveis
    var  gasolina   = document.getElementById('gasolina').value;
    var  etanol     = document.getElementById('etanol').value;
    var  result     = document.getElementById('result');

    // trocar virgula por ponto
    gasolina = gasolina.replace(',' , '.');
    etanol = etanol.replace(',' , '.');

    // identifica e realiza o calculo
    if (gasolina != '' && etanol != '') {

            // calcula o melhor combustivel
        var maisBarato  = etanol/gasolina;

        // Algoritmo
        if (maisBarato >= 0.7) {
            result.innerHTML = 'Melhor abastecer com gasolina.';
        }
        else {
            result.innerHTML = 'Melhor abastecer com etanol.';
        }
    }

   else {
    alert ('Preencha todos os campos!');
   }
}

function verificarinput(event) {
    // Declaração de variaveis
    var  letra = event.key;

    // verificar se digitou letra ou numero
    if (letra != 0 && letra != 1 && letra != 2 && letra != 3 && letra != 4 && letra != 5 && letra != 6 && letra != 7 && letra != 8 && letra != 9 && letra != ',' && letra != '.' && letra != 'Tab' && letra != 'Enter' && letra != 'Backspace' && letra != 'Delete' && letra != 'ArrowLeft' && letra != 'ArrowRight') {
        alert('Caractere invalido!');
        document.getElementById('gasolina').value = '';
        document.getElementById('etanol').value = '';
    }
}