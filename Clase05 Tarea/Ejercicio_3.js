//Grimaldi Emiliano
/* 
3- Remover duplicados en array
Hacerlo con bucle For
console.log(removerDuplicados([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
*/
function RemoverRepetidos(lista)
{
    let listaSinRepetidos = [];
    for (let i = 0; i < lista.length; i++)
    {
        if (!VerificarRepetidos(lista[i], listaSinRepetidos)) 
        {
           listaSinRepetidos.push(lista[i]);
        } 
    }
    return listaSinRepetidos;
}

function VerificarRepetidos(n, lista)
{
    for (let i = 0; i < lista.length; i++) 
    {
       if(n === lista[i])
       {
            return true;
       }        
    }
    return false;
}

let listaNumeros = [1, 2, 2, 3, 4, 4, 5];
console.log("Antes");
console.log(listaNumeros);
console.log("Despues");
console.log(RemoverRepetidos(listaNumeros));