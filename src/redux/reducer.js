import { ADD_FAVORITE, CLEAN_DETAIL, CLEAN_FAVORITES, DELETE_CHARACTER,  FILTER_GENDER_CARDS,  GET_CHARACTER_DETAIL, ORDER_CARDS } from "./actions";

const initialState = {
    allCharacters: [],
    characterDetail: {},
    myFavorites: [],
};

const rootReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return{
                ...state,
                myFavorites: [ ...state.allCharacters, action.payload ],
                allCharacters: [...state.allCharacters, action.payload]
            }
        case CLEAN_FAVORITES:
            return{
                ...state,
                myFavorites: []
            }      
        case DELETE_CHARACTER:
            return{
                ...state,
                myFavorites: state.myFavorites.filter((character) => character.id !== action.payload)
            }
        case GET_CHARACTER_DETAIL:
            return{
                ...state,
                characterDetail: action.payload
            }
        case CLEAN_DETAIL:
            return{
                ...state,
                characterDetail: {}
            }    
            /* filtro a todos los personajes que tengan un id distinto al que le paso por payload para eliminarlo */    
        case FILTER_GENDER_CARDS:
            const filter = state.allCharacters.filter((character) => character.gender === action.payload);
            return{
                ...state,
                myFavorites: filter ,
            }

        case ORDER_CARDS:
            const allCharacters2 = state.allCharacters;
            const sort = action.payload === 'Ascendente' ? allCharacters2.sort(function(a, b){
                if(a.id < b.id){
                    return -1;
                }
                if(a.id > b.id){
                    return 1;
                }
                return 0;
            }) : allCharacters2.sort(function(a, b){
                if(b.id > a.id){
                    return 1;
                }
                if(b.id < a.id){
                    return -1;
                }
                return 0;
            })
            return{
                ...state,
                myFavorites: sort,
            }  
        default:
            return{...state};
    }
};

export default rootReducer;