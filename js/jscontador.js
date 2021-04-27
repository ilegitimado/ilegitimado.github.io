function Contar() {
            var texto = document.getElementById("textarea").value;
            var numPalabras = 0;

            for (var i = 0; i < texto.length; i++) {
                var caracter = texto[i];
                if (caracter == " ") {
                    numPalabras += 1;
                }
            }
            numPalabras += 1;

            console.log(numPalabras)
            document.getElementById("palabras").innerHTML = numPalabras;
        }
