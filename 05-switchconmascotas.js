/* En este desafío recibirás una serie de tipos de mascotas junto con su edad.
Dependiendo de estos 2 factores tendrás que construir la función llamada getPetExerciseInfo la cual retornará una cadena de texto con la información necesaria acerca de cuanto ejercicio necesita hacer cada tipo de mascota.
La función recibirá las siguientes mascotas:
    perro
    gato
    ave
En caso de pasar una mascota la cual no sea de la lista deberá retornar "Tipo de mascota inválida"
Para cada tipo de mascota, la función retornará diferente información basada en la edad.
    Perros
        Si la edad es menor al año, deberá retornar "Los cachorros necesitan pequeñas y frecuentes sesiones de juego"
        Si la edad es entre 1 y 7 años, deberá retornar "Los perros a esta edad necesitan caminatas diarias y sesiones de juego"
        Si la edad es mayor a 7 años, deberá retornar "Los perros viejos necesitan caminatas más cortas"
    gatos
        Si la edad es menor al año, deberá retornar "Los gatitos necesitan frecuentes sesiones de juego"
        Si la edad es entre 1 y 7 años, deberá retornar "Los gatos a esta edad necesitan jugar diariamente"
        Si la edad es mayor a 7 años, deberá retornar "Los gatos viejos necesitan sesiones de juego más cortas"
    aves
        Si la edad es menor al año, deberá retornar "Las aves jóvenes necesitan mucho espacio para volar"
        Si la edad es entre 1 y 7 años, deberá retornar "Las aves necesitan jugar diariamente y un lugar para volar"
        Si la edad es mayor a 7 años, deberá retornar "Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar" */

function getPetExerciseInfo(type, age) {
    switch(type){
        case "perros":
            if(age < 1){
                console.log("Los cachorros necesitan pequeñas y frecuentes sesiones de juego");
            }else if(age > 1 && age < 7){
                console.log("Los perros a esta edad necesitan caminatas diarias y sesiones de juego");
            }else if(age > 7){
                console.log("Los perros viejos necesitan caminatas más cortas");
            }
            break;
        case "gatos":
            if(age <1 ){
                console.log("Los gatitos necesitan frecuentes sesiones de juego");
            } else if(age > 1 && age < 7){
                console.log("Los gatos a esta edad necesitan jugar diariamente")
            }else if(age > 7){
                console.log("Los gatos viejos necesitan sesiones de juego más cortas");
            }
            break;
        case "aves":
            if(age < 1){
                console.log("Las aves jóvenes necesitan mucho espacio para volar");
            } else if(age > 1 && age <7){
                console.log("Las aves necesitan jugar diariamente y un lugar para volar")
            } else if(age > 7){
                console.log("Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar")
            }
            break;
        default: console.log(`El tipo de animal ingresado ---> ${type}. No existe en nuestra base de datos.` )
    } 
  }

  getPetExerciseInfo("perros",2);
  getPetExerciseInfo("perros",5);
  getPetExerciseInfo("perros",8);
  getPetExerciseInfo("perros",0.5);

  getPetExerciseInfo("gatos",2);
  getPetExerciseInfo("gatos",5);
  getPetExerciseInfo("gatos",8);
  getPetExerciseInfo("gatos",0.5);

  getPetExerciseInfo("aves",2);
  getPetExerciseInfo("aves",5);
  getPetExerciseInfo("aves",8);
  getPetExerciseInfo("aves",0.5);

  getPetExerciseInfo("cocodrilo",24);