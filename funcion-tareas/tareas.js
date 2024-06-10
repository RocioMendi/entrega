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
                choices: ["Agregar nuevo neumatico", "Eliminar un neumatico actual", "Actualizar neumatico", "Leer stock actual"],
            },
          
        ]);
    //AGREGAR NEUMATICO
        if (decisionDeTareas.accion === "Agregar nuevo neumatico") {
            const {marca, medida} = await inquirer.prompt([
                {
                name: "marca",
                message: "¿Cuál es la marca del nuevo neumatico?",
                },
                {
                    name: "medida",
                message: "¿Cual es la medida del nuevo neumatico?",  
                },
            ]);

let neumatico = {
    marca: marca,
    medida: medida,
};


            tareas.push(neumatico);
            fs.writeFileSync("./tareas.json", JSON.stringify(tareas));
            console.log("Neumatico agregado:" , neumatico);
    


    //ELIMINAR NEUMATICO:
        } else if (decisionDeTareas.accion === "Eliminar un neumatico actual") {
            const { marca, medida } = await inquirer.prompt([
                {
                    name: "marca",
                    message: "¿Cuál es la marca del neumático a eliminar?",
                },
                {
                    name: "medida",
                    message: "¿Cuál es la medida del neumático a eliminar?",
                },
            ]);
        
            const indice = tareas.findIndex((neumatico) => neumatico.marca === marca && neumatico.medida === medida);
        
            if (indice === -1) {
                console.log("Neumático no encontrado");
                return; // Corta la ejecución si no se encuentra el neumático
            }
        
            tareas.splice(indice, 1);
        
            fs.writeFileSync("./tareas.json", JSON.stringify(tareas));
            console.log("Neumático eliminado correctamente");

//ACTUALIZAR NEUMATICO
        } else if (decisionDeTareas.accion === "Actualizar neumatico") {
            const { marca, medida } = await inquirer.prompt([
                {
                    name: "marca",
                    message: "¿Cuál es la marca del neumático a actualizar?",
                },
                {
                    name: "medida",
                    message: "¿Cuál es la medida del neumático a actualizar?",
                },
            ]);
        
            let neumatico = tareas.find((item) => item.marca === marca && item.medida === medida);
            
            if (!neumatico) {
                console.log("Neumático no encontrado");
                return; // Corta la ejecución
            }
        
            const { nuevaMarca, nuevaMedida } = await inquirer.prompt([
                {
                    name: "nuevaMarca",
                    message: `¿Cuál es la nueva marca? (actual: ${neumatico.marca})`,
                },
                {
                    name: "nuevaMedida",
                    message: `¿Cuál es la nueva medida? (actual: ${neumatico.medida})`,
                },
                
            ]);
        
        
            neumatico.marca = nuevaMarca || neumatico.marca;
            neumatico.medida = nuevaMedida || neumatico.medida;
        
            fs.writeFileSync("./tareas.json", JSON.stringify(tareas));
            console.log("Neumático actualizado");

            //VER STOCK DE NEUMATICOS ACTUAL
        } 
        else if (decisionDeTareas.accion === "Leer stock actual"){
            tareas.forEach((element)=>{
        console.log(element);
            });
        }
    }
    
    // Ejecutar la función principal
    main();
    }