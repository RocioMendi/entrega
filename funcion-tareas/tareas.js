import inquirer from "inquirer";
import fs from "fs";






export const tareasMain =async () => {


    // Leer el archivo JSON
    const tareas = JSON.parse(fs.readFileSync("tareas.json"));
    console.log(tareas);
    
    async function main() {
        const decisionDeTareas = await inquirer.prompt([
            {
                name: "accion",
                message: "¿Qué acción te gustaría realizar?",
                type: "list",
                choices: ["Agregar", "Eliminar", "Actualizar", "Leer"],
            },
          
        ]);
    //Agregar alumno
        if (decisionDeTareas.accion === "Agregar") {
            const {nombre, dni} = await inquirer.prompt([
                {
                name: "nombre",
                message: "¿Cómo te llamás?",
                },
                {
                    name: "dni",
                message: "¿Cual es tu número de dni?",  
                },
            ]);

let persona = {
    nombre: nombre,
    dni: dni,
};


            tareas.push(persona);
            fs.writeFileSync("./tareas.json", JSON.stringify(tareas));
            console.log("Persona agregada:" , persona);
    


    //ELIMINAR ALUMNO:
        } else if (decisionDeTareas.accion === "Eliminar") {
            const {dni} = await inquirer.prompt([
                {
                    name: "dni",
                message: "¿Cual es el número de dni a eliminar?",  
                },
            ]);

          const indice = tareas.findIndex((persona)=> persona.dni ==dni);

          tareas.splice(indice, 1);

            fs.writeFileSync("./tareas.json", JSON.stringify(tareas));
            console.log("Persona Eliminada");

//ACTUALIZAR ALUMNO
        } else if (decisionDeTareas.accion === "Actualizar") {
            const {dni} = await inquirer.prompt([
                {
                    name: "dni",
                message: "¿Cuál es el dni de la persona que te gustaria actualizar?",  
                },
            ]);
            let persona = tareas.find((item) => item.dni === dni);
            if (!persona){
                console.log("alumno no encontrado");
                return //Corta la ejecucion
            }
        const {nombre} = await inquirer.prompt([
            {
                name: "nombre",
            message: `¿Cuál es el nuevo nombre? (actual: ${persona.nombre})`,  
            },

        ])
persona.nombre =nombre;
fs.writeFileSync("./tareas.json", JSON.stringify(tareas));
            console.log("Persona Actualizada");

            //VER LOS ALUMNOS
        } 
        else if (decisionDeTareas.accion === "Leer"){
            tareas.forEach((element)=>{
        console.log(element);
            });
        }
    }
    
    // Ejecutar la función principal
    main();
    }