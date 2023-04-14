const userValidate = (email, password, error) => {
   // EMAIL
  if (!email) {
    return 'Completar este campo'; 
  }
  else if (email.length > 35) {
    return error = 'No puede sobrepasar los 35 caracteres';
  } 
  else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(email)){
    return 'Email invalido';
  } 
  // PASSWORD
  else if (password.length < 6 || password.length > 10 ){
    return 'Longitud erronea'; 
  }else if(!/\d/.test(password)) {
    return 'Debe contener al menos un numero'
  }
  else{
    return '';
  }

};

module.exports = userValidate;