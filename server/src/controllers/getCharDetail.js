// ESTA FUNCION HACE LO MISMO QUE getCharById SOLO QUE SE QUEDA CON MAS PROPIEDADES DEL PERSONAJE

const axios = require('axios');
const { URL_BASE, api_key } = process.env;


const successH = (response,res) => {

    const { name, gender, status, origin, species, image } = response.data;   
        
    res.writeHead(200, {'Content-Type':'applicationjson' });   
    res.end(JSON.stringify({ name, gender, status, origin, species, image }));
};


const errorH = (error, res) => {
    res.writeHead(500, { 'Content-Type': 'text/plain' })
    res.end(error.message);
};


const getCharDetail = (res, id) => {
    axios.get(`${URL_BASE}/character/${id}?key=${api_key}`)
    .then((response) => successH(response, res))    
    .catch((error) => errorH(error, res));
};

module.exports = getCharDetail;
