const { User } = require('../DB_connection');
const userValidate = require('../utils/userValidate');


const postUser = async(req, res) => {
  const { id, email, password } = req.body;
  console.log(req.body);
  try {
    /* userValidate(email, password, error); */
    if(!email) {res.status(400).json({ message: 'Faltan datos'});}
    else if(!password) {res.status(400).json({ message: 'Faltan datos'});}
    else{
      const user = await User.findOrCreate({where:{id: id, email: email, password: password}});
      res.status(200).json(user);

    }

  } catch (error) {
    res.status(500).json({ error: error.message })   
  }
};

module.exports = postUser;