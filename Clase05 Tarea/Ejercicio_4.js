//Grimaldi Emiliano
/*
4. Sumar dígitos a partir de un string
console.log(sumarDigitos("12345")); // Output 15
*/
function SumarDigitosString(str)
{
    let resultado = 0;
    let numeros = "0123456789";

    for (i = 0; i < str.length; i++) 
    {
        if(numeros.indexOf(str.charAt(i)) != -1)
        {
            resultado += parseInt(digitos[i]);
        }
    }
    return resultado;
}

let digitos = "a12a3s45adsaa"
console.log(SumarDigitosString(digitos));