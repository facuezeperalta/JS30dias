/* En este desafío, debes encontrar al gatito más famoso con base en su número de seguidores.

Recibirás un array de objetos que incluirán las siguientes propiedades:

    name: nombre del gatito.
    followers: un array de números, donde cada uno representa los seguidores de cada red social.

Tu tarea es devolver un array con los nombres de los gatos que tienen solo el mayor número de seguidores. Si hay dos o más gatos con el mismo número máximo de seguidores, deberás incluirlos en el array de resultado, manteniendo el orden en el que aparecen en el array de entrada. */



function findFamousCats(cats) {
    let famousStats = {
        catNames :[],
        maxNumOfFollowers : 0,
    };

    for(let i = 0; i < cats.length; i++){
        const cat = cats[i];
        const totalFollowers = cat.followers.reduce((acum,currentVal) => acum + currentVal,0);
    }
    if(totalFollowers === famousStats.maxNumOfFollowers){
        famousStats.catNames.push(cat.name);
    }

    if(totalFollowers > famousStats.maxNumOfFollowers){
        famousStats.catNames = [];
        famousStats.catNames.push(cat.name);
        famousStats.maxNumOfFollowers = totalFollowers; 
    }

    return famousStats.catNames;
}