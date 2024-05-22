/* En este desafío, debes crear la lógica de la función isLeapYear, que determina si un año es bisiesto o no. Un año es bisiesto si cumple con las siguientes condiciones:

    Es divisible por 4, pero no por 100.
    Si es divisible por 100 debe serlo por 400 también.

La función isLeapYear recibe un único parámetro: el año a evaluar. Debe devolver true si el año es bisiesto o false en caso contrario.

Toma en cuenta que la función debe ser capaz de manejar valores no enteros o negativos. */

let year = -2000;

function isLeapYear(year){
    if(year % 1 != 0 || year <= 0){
        return false
      }
    
      if(year % 4 === 0){
        if(year % 100 === 0 && year % 400 === 0){
          return true
        }
    
        if(year % 100 === 0){
          return false
        }
    
        return true
      }
    }