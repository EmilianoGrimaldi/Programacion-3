//Grimaldi Emiliano
/*
1- Encontrar números primos hasta número “n”
Resolverlo con bucle For, se pueden mostrar los números por consola o devolver un array
para mostrarlos.
console.log(encontrarPrimos(10)); // Primos: [2, 3, 5, 7]
*/
function EncontrarPrimos(n)
{
    let numerosPrimos = [];

    for (i = 2; i <= n; i++) 
    {   
        if(VerificarPrimo(i))
        {
            numerosPrimos.push(i);
        }
    }   

    return numerosPrimos;  
}

function VerificarPrimo(n)
{
    let esPrimo = true;
    for (j = 2; j < n; j++) 
    {             
        if(n % j === 0)
        {
            esPrimo = false;
            break;
        }  
    }
    return esPrimo;
}

console.log(EncontrarPrimos(100));