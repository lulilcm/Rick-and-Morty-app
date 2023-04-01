let favs = require('../utils/favs');

const postFav = (req, res) => {
    favs.push(req.body);
    res.status(200).json({ status: 'ok' });
};

const getFav = (req, res) => {
    res.status(200).json(favs);
};

const deleteFav = (req, res) => {
    try {
        
        const { id } = req.params;
        favs = favs.filter((char) => char.id !== Number(id) );
    
        res.status(200).json({ status: 'ok' });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    postFav,
    deleteFav,
    getFav,
};