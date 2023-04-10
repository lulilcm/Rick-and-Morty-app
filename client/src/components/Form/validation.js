const validateData =  (userData, errors, setErrors) => {
  // username
  if (!userData.email) {
    setErrors({ ...errors, email:'Completar este campo'});
  }
    
  else if (userData.email.length > 35)  {
    setErrors({ ...errors, username:'No puede sobrepasar los 35 caracteres' });
  }
   
  else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)) {
     setErrors({ ...errors, username:'Email invalido' });
  }
  
    // password
  else if (userData.password.length < 6 || userData.password.length > 10 ) {
    setErrors({ ...errors, password:'Longitud erronea'});
  }
    
  else if(!/\d/.test(userData.password)) {
    setErrors({ ...errors, password:'Debe contener al menos un numero'});
  }

  else {
   setErrors({ ...errors, email:'', password:'' });
  }
    
  
  
  
};

export default validateData;