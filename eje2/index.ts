interface Persona {
    nombre:string;
    apellido1:string;
    apellido2:string;

}

function saludo(datos:Persona):string {
    return `hola ${datos.nombre} ${datos.apellido1} ${datos.apellido2}`;
}

let user = {
    nombre:"Andres",
    apellido1:"Ocampoo",
    apellido2:"Aguilar"
};

console.log(saludo(user));