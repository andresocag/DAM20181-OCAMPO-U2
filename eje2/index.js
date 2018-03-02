function saludo(datos) {
    return "hola " + datos.nombre + " " + datos.apellido1 + " " + datos.apellido2;
}
var user = {
    nombre: "Andres",
    apellido1: "Ocampoo",
    apellido2: "Aguilar"
};
console.log(saludo(user));
