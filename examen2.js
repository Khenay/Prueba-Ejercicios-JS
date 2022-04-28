function fraseUsuario() {
    var frase = window.prompt('Introduce una frase para contar las palabras')
    var contador = 0;
    for (let i = 0; i <= frase.length; i++) {

        if (frase[i] == ' ') {
            contador = contador + 1
        }
    }
    alert('Tu frase tiene ' + (contador + 1) + ' palabras')
};