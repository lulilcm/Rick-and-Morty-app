const { users } = require('../utils/users')


const login = (req, res) => {
  const { email, password } = req.query;
 
  if(email === users.email && password === users.password){
    res.status(200).json({ access : true });
  }else{
    res.status(403).json({ access : false });
  }
};
/* email, password
access */
module.exports = login;