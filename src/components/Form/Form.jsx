import React, { useState } from "react";
import style from './Form.module.css';
import validateData from "./validation";

const Form = (props) => {

  const[ userData, setUserData ] = useState({
    username: '',
    password: '',
  });

  const[ errors, setErrors ] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (event) => {
    // Esta funcion va a recibir el evento de cuando se escribe algo en el input  y va a setear el estado con esos valores

    const property = event.target.name; // recibe lo que esta en el atributo name del input

    const value = event.target.value; // recibe lo que esta el estado que esta en el atributo value del input

    setUserData({...userData, [property]:value})
    validateData({...userData, [property]:value}, errors, setErrors) // le paso lo que contiene el estado local y el estado de errors
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };


  return(
      <form className={style.formContainer} onSubmit={handleSubmit}>
        <div className={style.inputContainer}>
          <label htmlFor="username" className={style.label}>Username: </label>
          <input type="text" name="username" value={userData.username} onChange={handleInputChange} className={style.input} />
          <p>{errors.username}</p>
        </div>

        <div className={style.inputContainer}>
            <label htmlFor="password" className={style.label}>Password: </label>
            <input type="text" name="password" value={userData.password} onChange={handleInputChange} className={style.input} />
            <p>{errors.password}</p>
        </div>

        <button className={style.login}><em>Log in</em></button>
      </form>
  );
};

export default Form;