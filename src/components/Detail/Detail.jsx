import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cleanDetail, getCharacterDetail } from "../../redux/actions";
import style from './Detail.module.css';


const Detail = (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  const character = useSelector((state) => state.characterDetail)
  

  
  useEffect(() => {
    dispatch(getCharacterDetail(params.detailId))

    return () => {
      dispatch(cleanDetail());
    }
  },[params.detailId]);
  
  return(
    <div className={style.infoContainer}>
      {character.name ?(
        <> 
          <img src={character.image} alt="" />     
          <h2 className={style.name}>{character.name}</h2>
          <p className={style.infoh2}>{character.status}</p>
          <p className={style.infoh2}>{character.species}</p>
          <p className={style.infoh2}>{character.gender}</p>
          <p className={style.infoh2}>{character.origin?.name}</p>
          
        </>  
      ) : (
      <h3>Loading...</h3>
      )}

    </div>
  );

};

export default Detail;