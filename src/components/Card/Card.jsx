import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from './Card.module.css';
import { connect } from 'react-redux';
import { addFavorite, deleteCharacter } from "../../redux/actions";


function Card({ id, name, species, gender, image, onClose, deleteCharacter, addFavorite, myFavorites }) {
   const[ isFav, setIsFav ] = useState(false);


   useEffect(() => {
      myFavorites.forEach((fav) => {
         if(fav.id === id){
            setIsFav(true);
         }
      });
   },[myFavorites]); 
   

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         deleteCharacter(id)
      }
      else{
         setIsFav(true)
         addFavorite({ id, name, species, gender, image })
      }
   };


   return (
      <div className={styles.infoContainer}>
         {
            isFav ? (
            <button onClick={handleFavorite}>❤️</button>
          ) : (
            <button onClick={handleFavorite}>🤍</button>
          )
         }
         <button onClick={() => {onClose(id)}} className={`${styles.onClose} ${styles.button}`}>X</button>
          
         <div className={styles.nameContainer}>
            <img src={image} alt={name} className={styles.image} />
            <Link className={styles.name} to={`/detail/${id}`}> {/** la ruta va con templates porque necesitamos el id y las llaves son para javascript */}
               <h2 className={styles.name}>{name}</h2>  
            </Link>
         </div>
                     
         <h2 className={styles.infoh2}>{species}</h2>
         <h2 className={styles.infoh2}>{gender}</h2>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
  return{   
     addFavorite: (character) => {
        dispatch(addFavorite(character));
     },
     deleteCharacter: (id) => {
        dispatch(deleteCharacter(id));
     },
   };
};

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites
   }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Card);
