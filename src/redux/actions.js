import axios from 'axios';
import { api_key } from '../ignore';

export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_CHARACTER = 'DELETE_CHARACTER';
export const FILTER_GENDER_CARDS = 'FILTER_GENDER_CARDS';
export const ORDER_CARDS = 'ORDER_CARDS';
export const GET_CHARACTER_DETAIL = 'GET_CHARACTER_DETAIL';
export const CLEAN_DETAIL = 'CLEAN_DETAIL';
export const CLEAN_FAVORITES = 'CLEAN_FAVORITES';



export const addFavorite = (character) => {
    return{ type: ADD_FAVORITE, payload: character };
};


export const deleteCharacter = (id) => {
    return{ type: DELETE_CHARACTER, payload: id };
};


export const filterCards = (gender) => {
    return{ type: FILTER_GENDER_CARDS, payload: gender };
};





export const orderCards = (id) => {
    return{ type: ORDER_CARDS, payload: id }
};


export const getCharacterDetail = (detailId) => {
    return function(dispatch){
        const URL_BASE = 'https://be-a-rym.up.railway.app/api'
        
        
        axios(`${URL_BASE}/character/${detailId}?key=${api_key}`)
        .then((response) => dispatch({type: GET_CHARACTER_DETAIL, payload: response.data}));
    };
        
};


export const cleanDetail = () => {
    return{ type: CLEAN_DETAIL };
};


export const cleanFavorites = () => {
    return{ type: CLEAN_FAVORITES }
};