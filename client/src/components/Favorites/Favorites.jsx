import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { orderCards, filterCards, cleanFavorites, getFavorites } from "../../redux/actions";
import style from './Favorites.module.css'


const Favorites = () => {
    const myFavorites = useSelector((state) => state.myFavorites);
    const dispatch = useDispatch();

    const selectOrderCards = (event) => {
        event.preventDefault();
        dispatch(orderCards(event.target.value))
    };

    const selectFilterCards = (event) => {
        dispatch(filterCards(event.target.value))
    };

     useEffect(() => {
        dispatch(getFavorites());
       /* return() => {
            dispatch(cleanFavorites());
        };*/
    },[]); 

    return(
        <div>
            <div>
                <select name="orderCards" onChange={selectOrderCards} className={style.selectOption}>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select name="filterCards" onChange={selectFilterCards} className={style.selectOption}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
            {
                myFavorites.map(({id, name, species, origin, status, gender, image}) => {
                    return(
                        <div className={style.favContainer}> 
                            <Card
                            key={id}
                            id={id}
                            name={name}
                            species={species}
                            origin={origin.name}
                            status={status}
                            gender={gender}
                            image={image}
                            />

                        </div>
                    )
                })
            }
        </div>
    )
};

export default Favorites;