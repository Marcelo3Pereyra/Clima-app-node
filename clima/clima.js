const axios = require('axios');




const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=330b305b882b1461f81ae15a023ba288&units=metric`)

    return resp.data.main.temp;

}



module.exports = {
    getClima
}