let nombre:string;
nombre="Andres";
let edad:number=22;

let persona = {
    nombre:nombre,
    edad:edad
}

let mensaje:string = `mi nombre es ${persona.nombre}
y tengo ${persona.edad} años`;

console.log(mensaje);