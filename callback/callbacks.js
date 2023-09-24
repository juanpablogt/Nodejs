
//callbacks en nodejs permite ejecutar una funcion despues de que otra haya sido ejecutada

/* setTimeout(function() {
    console.log("I am first");
}, 3000); */

const getUsuarioById = (id, callback) => {
    const usuario = {
        id,
        nombre: 'Fernando'
    }

    setTimeout(() => {
        callback(usuario);
    }, 1500);
}

getUsuarioById(10, (usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});