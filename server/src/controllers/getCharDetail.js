// ESTA FUNCION HACE LO MISMO QUE getCharById SOLO QUE SE QUEDA CON MAS PROPIEDADES DEL PERSONAJE

const axios = require('axios');
const { URL_BASE, api_key } = process.env;



const getCharDetail = (req, res) => {

  const { id } = req.params;
  axios.get(`${URL_BASE}/character/${id}?key=${api_key}`)
  .then((response) => {
    const { id, name, gender, species, status, image, origin } = response.data;
    res.status(200).json({ id, name, image, gender, species, status, origin  });  
  })
  .catch((error) => {
    res.status(500).json({ error : error.message }) 

  });
 
};

module.exports = getCharDetail;
