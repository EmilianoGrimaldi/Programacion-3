/*
6- Balancear (que sea simétrico) un string de (), []
y {}
Usar un array como a modo de stack.
Probar con:
● "({[]})" // Output true
● "([)]" // Output false
● "{[()]}" // Output true
● "({[})]" // Output false
*/

let str1 = "({[]})"
let str2 = "([)]"
let str3 = "{[()]}"
let str4 = "({[})]"

function balancearStr(str)
{
    let aux = [];
     
    for (let i = 0; i < str.length; i++) 
    {
        if(str[i] === "(" || str[i] === "{" || str[i] === "[")
        {   
            aux.push(str[i]);
        }
        else if(str[i] === ")" || str[i] === "}" || str[i] === "]")
        {
            let ultimo = aux.pop();
            if((str[i] === ")" && ultimo !== "(") || (str[i] === "]" && ultimo !== "[") || (str[i] === "}" && ultimo !== "{"))
            {
                return false;
            }        
        }
    } 
    return aux.length === 0;
}
console.log(balancearStr(str1));
console.log(balancearStr(str2));
console.log(balancearStr(str3));
console.log(balancearStr(str4));