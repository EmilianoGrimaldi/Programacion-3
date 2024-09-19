//Grimaldi Emiliano
/*
2- El texto es un palíndromo?
Resolverlo aplicando métodos de string. Probar con las palabras:
● neuquen
● reconocer
● rallar
console.log(esPalindromo("neuquen")); // Salida: true
*/
function EsPalindromo(cadena)
{   
    let cadenaInversa;
    esPalindromo = false;

    if(cadena.length > 0)
    {
        cadena = cadena.trim();
        cadena = cadena.toLowerCase();
        cadenaInversa = InvertirCadena(cadena);
    }

    if (cadenaInversa === cadena) 
    {
        esPalindromo = true;    
    }
    return esPalindromo;
}   

function InvertirCadena(cadena)
{
    let cadenaInversa = "";
    for (j = cadena.length; j >= 0; j--) 
    {
        if(cadena[j] !== undefined)
        {
            cadenaInversa += cadena[j];   
        }
    }
    return cadenaInversa;
}
console.log(EsPalindromo("neuquen"));
console.log(EsPalindromo("reconocer"));
console.log(EsPalindromo("rallar"));