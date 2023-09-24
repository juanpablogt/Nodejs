const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];

const getEmpleado = (id, callback) => {

    const empleado = empleados.find(e => e.id == id);

    if (empleado) {
        callback(null, empleado); // Cambio aquí para pasar null como el primer argumento (error) en lugar de un objeto
    } else {
        callback(`Empleado con id ${id} no existe`, null); // Cambio aquí para pasar el error como el primer argumento y null como el segundo
    }

}

getEmpleado(1, (err, empleado) => { // Cambio aquí para usar una función de flecha en lugar de un objeto
    if (err) {
        console.log('ERROR!');
        return console.log(err);
    }
    console.log('Empleado existe!');
    console.log(empleado);
});
