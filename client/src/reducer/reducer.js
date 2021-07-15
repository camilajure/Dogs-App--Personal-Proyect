import {GET_BREEDS, GET_ID, GET_BYNAME, GET_TEMPERAMENT,POST_BREED, SORT_BY_ALPHABET, ORDER_ASC,
    ORDER_DESC } from '../actions/actions';

const initialState = {
    breeds: [],
    temperament: [],
    breedsDetail :{},
    filteredBreeds: [],
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
    case GET_BREEDS: return {
        ...state,
        breeds: action.payload,
    }
    case GET_TEMPERAMENT: return {
        ...state,
        temperament: action.payload,
    }
    case GET_ID: return {
        ...state,
        breedsDetail: action.payload,
    }
    case  GET_BYNAME: return {
        ...state,
        breeds: action.payload,
    }
    case POST_BREED: return{
        ...state,
        breeds: state.breeds.concat(action.payload),
    }
    
case SORT_BY_ALPHABET:
//    let sortedArr = action.payload.direction === "asc" ?
    //    sortAsc(state.filteredProducts, 'name') :
    //    sortDesc(state.filteredProducts, 'name');
 
   return {
       ...state,
    //    filteredProducts: sortedArr
   }
   case ORDER_ASC: return{
    ...state,
    filteredBreeds: [...state.filteredBreeds].sort((a, b) => (a[action.payload].toLowerCase() > b[action.payload].toLowerCase()) ? 1 : -1),
    
}

case ORDER_DESC: return{
    ...state,
    filteredBreeds: [...state.filteredBreeds].sort((a, b) => (a[action.payload].toLowerCase() < b[action.payload].toLowerCase()) ? 1 : -1),
    
}
    default: return {...state}
    }
}