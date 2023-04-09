const { Favorite } = require("../DB_connection");


const postFav = async(req, res) => {
    const {name, origin, status, image, species, gender} = req.body;
    try {
      if (!name || !origin || !status || !image || !species || !gender) {
        res.status(401).json({ message: 'Faltan datos' });
      }
      else{
        const favorite = await Favorite.findOrCreate(name, origin, status, image, species, gender);
        res.status(200).json(favorite);
      }
    } catch (error) {
       res.status(500).json({ error: error.message }); 
    }
};

module.exports = postFav;