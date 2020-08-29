const lugar = require('./lugar/lugar');

const clima = require('./clima/clima');


const argv = require('yargs').options({
    nombre: {
        alias: 'n',
        desc: 'Nombre de la cuidad',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.nombre)
//     .then(console.log)


// clima.getClima(argv.nombre.lat, argv.nombre.lng)
//     .then(console.log)
//     .catch(console.log)

const getInfo = async(nombre) => {

    try {

        const coords = await lugar.getLugarLatLng(nombre);

        const temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima de ${coords.name} es de ${temp} grados.`

    } catch (e) {

        return `No se pudo encontrar el clima de ${coords}`
    }

}


getInfo(argv.nombre)
    .then(console.log)
    .catch(console.log)