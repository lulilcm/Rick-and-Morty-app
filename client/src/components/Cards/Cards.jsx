import { useDispatch } from "react-redux";
import Card from "../Card/Card";
import styles from './Cards.module.css';
import React, { useEffect } from "react";
import { getFavorites } from "../../redux/actions";

export default function Cards({ characters, onClose }) {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getFavorites());
   },[]);


   return (
   <div className={styles.cardsContainer}>
      {  
         characters?.map(({ id, name, species, gender, image }) => 
         // como characters es un array de objetos y cada character es eun objeto hago destracturing
         {
            return(
            <Card
              key={id}
              id={id}
              name={name}
              species={species}
              gender={gender}
              image={image}
              onClose={onClose}
            />)
         })
      }
   </div>
   );
}
