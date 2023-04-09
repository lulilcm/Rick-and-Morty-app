import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from './Card.module.css';
import { connect, useDispatch } from 'react-redux';
/* import { removeFav } from "../../redux/actions"; */
import axios from 'axios';
import { getFavorites } from "../../redux/actions";



function Card({ id, name, species, origin, status, gender, image, onClose, myFavorites }) {
   const[ isFav, setIsFav ] = useState(false);
   const dispatch = useDispatch();

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if(fav.id === id){
            setIsFav(true);
         }
      });
   },[myFavorites]); 

   const addFavorite = async(character) => {
      await axios.post('http://localhost:3001/postFav',character);
      console.log('ok');
   };

   const removeFav = async(id) => {
      await axios.delete(`http://localhost:3001/deleteFav/${id}`);
      dispatch(getFavorites());
      alert('eliminado con exito');
      /* /deleteFav/:id */
   };
   
   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         removeFav(id)
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
         <h2 className={styles.infoh2}>{origin.name}</h2>
         <h2 className={styles.infoh2}>{status}</h2>
         <h2 className={styles.infoh2}>{gender}</h2>
      </div>
   );
}

/* const mapDispatchToProps = (dispatch) => {
  return{   
     removeFav: (id) => {
        dispatch(removeFav(id));
     },
   };
}; */

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites
   }
} 

export default connect(mapStateToProps, null)(Card);
