import React, { useState } from "react";
import styles from './SearchBar.module.css';


export default function SearchBar(props) {
   const[ characterId, setCharacterId ] = useState();

   const handleChange = (event) => {
      setCharacterId(event.target.value)
   };


   return (
      <div className={styles.searchContainer}>
         <input type='search' className={styles.input} onChange={handleChange} />
         <button onClick={() => {props.onSearch(characterId)}}  className={styles.agregar}>Agregar</button>
      </div>
   );
}
