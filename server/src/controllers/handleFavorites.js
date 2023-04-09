/* let favs = require('../utils/favs');

const postFav = (req, res) => {
    favs.push(req.body);
    res.status(200).json({ status: 'ok' });
};


const deleteFav = (req, res) => {

    const { id } = req.params;
      
    favs = favs.filter((char) => char.id != id );
    
    res.status(200).json({ status: 'ok' });
};

module.exports = {
    postFav,
    deleteFav,
    getFav,
}; */

const { Favorite } = require("../DB_connection");



const getFav = async(req, res) => {
    try {
        const favorites = await Favorite.findAll();
        res.status(200).json(favorites);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getFav;