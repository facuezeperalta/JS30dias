/* En este desafío tendrás que calcular la propina que deben dejar los clientes de un restaurante en función de su consumo.
La función calculateTip recibirá dos parámetros, billAmount que representa el costo total de lo que se haya consumido y tipPercentage que representa el porcentaje de propina a dejar. Ambos valores serán de tipo Number y siempre serán positivos, incluyendo el 0. La función deberá devolver el valor de la propina como un número.
Tendrás inputs y outputs como los siguientes 👇
Ejemplo 1:
Input: calculateTip(100, 10);
Output: 10;
Ejemplo 2:
Input: calculateTip(1524.33, 25);
Output: 381.0825; */

function calculatetip(billAmount, tipPercentage){
    return billAmount * (tipPercentage/100);
    
}


console.log(calculatetip(100,10));

console.log(calculatetip(1524.33,25));