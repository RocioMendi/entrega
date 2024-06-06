//package.json guarda todas las dependencias

//inquire crea aplicaciones de terminal

//const inquirer = require("inquirer");
//




//PARA FUNCION ALUMNOS-----------------------------------------------------------------------------------------------------
/* const alumnos = JSON.parse(fs.readFileSync("alumnos.json"));

//const alumnos = [];
console.log(alumnos);

const persona = await inquirer.prompt([{
    name: "nombre",
    message: "¿Cómo te llamás?",
},
{
    name: "apellido",
    message: "¿Cómo es tu apellido?",

}]
);

alumnos.push(persona);
console.log(alumnos);

fs.writeFileSync("alumnos.json", JSON.stringify(alumnos));
console.log(alumnos);

if(persona.colorFavorito === "verde"){
    console.log() }*/

//asi mantenemos datos en el tiempo ya que pregunta el nombre y se guardan en la variable a medida que yo se los pase por terminal

//tarea, le vamos a dar por consola nombre de la tarea y la descripcion, lo mismo que esto pero con tareas

//PARA TAREAS--------------------------------------------------------------------------

// Leer el archivo JSON

import { tareasMain } from "./funcion-tareas/tareas.js";

tareasMain();

