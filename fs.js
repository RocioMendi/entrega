const objeto = {
    parametro1: 5,
    parametro2: "texto",
};

const arreglo = [
    {
        parametro1: 5,
        parametro2: "texto",
    },
    {
        parametro1: 5,
        parametro2: "texto",
    },
];


//console.log(arreglo[0]);

//el json estandariza todo el objeto en un texto, se usa en objetos y arreglos, para no hacer lios con los string y numbers, se hace una cadena de texto, sin distriminar nada dentro de el 

const json = JSON.stringify(arreglo);

//console.log(JSON.parse(json));

//el metodo stringfy me transforma el objeto en un json 
//transformar json en arreglo con metodo PARSE
const jsonArreglo = JSON.parse(json);


//FS= FILE SISTEM, guardamos objetos como archivos
const fs = require("fs")
fs.writeFile("texto.txt", "Hola mi nombre es ro", (error) => {
    if(error){
        console.log(`error: ${error}`);
    };
});

fs.writeFileSync("texto2.json", json);

const texto = fs.readFileSync("texto.txt", {encoding:"utf-8"});
console.log(texto);

