/* ciclo for */
for(let i = 0; i <=10;i++){
    console.log(i);
}



/* for-in se usa para recorrer propiedades de un objeto  */

const user = {
    name: "facundo",
    age: 29,
    address: "Argentina"
}
console.log("----------")

for(const propiedad in user){
    console.log(user[propiedad]);
}


/* for-of se usa para recorrer arrays */
const diasDeLaSemana = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
console.log("----------")
for(const element of diasDeLaSemana){
    console.log(element);
}


console.log("---------------------")
let contador =0;

while(contador <50){
    console.log(contador);
    contador++;
}

console.log("---------------------")

let contadorDoWhile = 0;

do{
    console.log(contadorDoWhile);
    contadorDoWhile++;
}while(contadorDoWhile <= 10);


