import axios from 'axios';
import { URL_BASE } from '../utils/index';

export const ADD_FAVORITE = 'ADD_FAVORITE';
export const GET_FAVORITES = 'GET_FAVORITES';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER_GENDER_CARDS = 'FILTER_GENDER_CARDS';
export const ORDER_CARDS = 'ORDER_CARDS';
export const GET_CHARACTER_DETAIL = 'GET_CHARACTER_DETAIL';
export const CLEAN_DETAIL = 'CLEAN_DETAIL';
export const CLEAN_FAVORITES = 'CLEAN_FAVORITES';



export const addFavorite = (character) => {
    const endpoint = 'http://localhost:3001/postFav';
 return (dispatch) => {
    axios.post(endpoint, character).then(({ data }) => {
        return dispatch({
        type: 'ADD_FAV',
        payload: data,
        });
    });
  };
};


export const getFavorites = () => {
    return (dispatch) => {
        axios.get(`${URL_BASE}/getFav`)
        .then(({data}) => {
            return dispatch({
                type: GET_FAVORITES,
                payload: data
            });
        });
    };
};


export const removeFav = (id) => {
    return (dispatch) => {
        axios.delete(`${URL_BASE}/deleteFav/${id}`)
        .then(({data}) => {
            return dispatch({
                type: REMOVE_FAV,
                payload: data
            });
        });
    };
};
   


export const filterCards = (gender) => {
    return{ type: FILTER_GENDER_CARDS, payload: gender };
};





export const orderCards = (id) => {
    return{ type: ORDER_CARDS, payload: id }
};


export const getCharacterDetail = (detailId) => {
    return function(dispatch){
        axios(`${URL_BASE}/detail/${detailId}`)
        .then((response) => dispatch({type: GET_CHARACTER_DETAIL, payload: response.data}));
    };
        
};


export const cleanDetail = () => {
    return{ type: CLEAN_DETAIL };
};


export const cleanFavorites = () => {
    return{ type: CLEAN_FAVORITES }
};