const axios = require('axios');




const getLugarLatLng = async(nombre) => {

    const encodedUrl = encodeURI(nombre)

    console.log(encodedUrl);



    const instance = axios.create({
        baseURL: `https://restcountries-v1.p.rapidapi.com/name/${encodedUrl}`,
        headers: { 'x-rapidapi-key': '2425a40b9bmsh035e2f77347ab6ap194204jsn92e9b301689c' }
    });

    const resp = await instance.get();


    if (!resp) {
        throw new Error(`No hay resultados para ${nombre}`)
    }

    const name = resp.data[0].name;
    const lat = resp.data[0].latlng[0];
    const lng = resp.data[0].latlng[1];



    return {
        name,
        lat,
        lng
    }

}


module.exports = {
    getLugarLatLng
}