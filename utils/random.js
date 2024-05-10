
export function getRandomInt(max){
    return Math.floor(Math.random()*max);
}

export function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export function generarNumeroAleatorio8() {
    var numeroAleatorio = Math.random() * 99999999; // Genera un número aleatorio entre 0 y 10000000000
    numeroAleatorio = numeroAleatorio.toFixed(0); // Ajusta el número a 10 cifras sin decimales
    return numeroAleatorio;
  }

  export function generarPasswordAleatoria() {
    var numeroAleatorio = Math.random() * 9999999999; // Genera un número aleatorio entre 0 y 10000000000
    numeroAleatorio = numeroAleatorio.toFixed(0); // Ajusta el número a 10 cifras sin decimales
    return 'Qwert'+numeroAleatorio;
  }