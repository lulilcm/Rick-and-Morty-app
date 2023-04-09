
const { User } = require('../DB_connection');

const login = async(req, res) => {
  const { email, password } = req.query;

  try {
    if(!email){ 
      return res.status(400).json({ message: 'Faltan datos'});
    }
    else if(!password) {
      return res.status(400).json({ message: 'Faltan datos'});
    }
    
    const findUser = await User.findOne({ where: { email: email, password: password } });

    if (findUser) {
      res.status(200).json({ access: true });
    }else{
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = login;