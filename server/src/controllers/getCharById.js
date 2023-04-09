const axios = require('axios');
const { URL_BASE, api_key } = process.env;


const getCharById = async(req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`${URL_BASE}/character/${id}?key=${api_key}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error : error.message });
  }
};


module.exports = getCharById;
