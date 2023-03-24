import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate  } from 'react-router-dom';
import './App.css'
import { Nav, Detail, Cards, Form, Favorites, About } from './components';
 import { URL_BASE, username, password } from  './utils/index';


function App () {
  
  const[ oldCharacters, setCharacters ] = useState([]);

  // uso el hook useNavigate para que cuando el usuario haga login lo lleve a '/home'
  const navigate = useNavigate();
  const[access, setAccess] = useState(false);
  
  const login = (userData) => {
    if (userData.username === username && userData.password === password){ 
     setAccess(true);
     navigate('/home');
    }
  };

  useEffect(() => {
    !access && navigate('/');
 }, [access,navigate]);
  
  const searchCharacter = (id) => {

    if(oldCharacters.find((character) => character.id === id)){
      return alert('Personaje repetido');
    }
    
    /* fetch(`${URL_BASE}/character/${id}?key=${api_key}`) */
    fetch(`${URL_BASE}/onsearch/${id}`)
    .then((response) => response.json())
    .then((data) => {
      if(data.name){
        setCharacters((oldCharacters) => [...oldCharacters, data]);
      }
      else{
        window.alert('No hay personajes con ese ID');
      }
    });
  };


  const onClose = (id) => {
    // llamo a setCharacters porque es la unica funcion que puede modificar el estado de characters
    setCharacters(oldCharacters.filter((character) => character.id !== id));
  };


  
  // uso el hook useLocation que me devuelve un objeto con una propiedad pathName que es la url donde estoy
  const location = useLocation();


  return (
    <div className='App' style={{ padding: '25px' }}>

      {/* hago un condicional con la propiedad pathName para que no me muestre el componente Nav si estoy en el path del formulario */}
      {location.pathname !== '/' && <Nav onSearch={searchCharacter}  />}

      

      <Routes>

        <Route path='/favorites' element={<Favorites />} />
        
        <Route path='/' element={<Form login={login} />} />

        <Route path='/home' element={ <Cards characters={oldCharacters} onClose={onClose} />}
        />

        <Route path='/about' element={<About />} />

        <Route path='/detail/:detailId' element={<Detail />}/>

       
        
      </Routes>
        
    </div>
  )
}

export default App
