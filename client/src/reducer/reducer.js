import {GET_BREEDS, GET_ID, GET_BYNAME, GET_TEMPERAMENT,POST_BREED, ORDER_ASC,
    ORDER_DESC, TEMP_FILTER, ORDER_WEIGHTMAX, ORDER_WEIGHTMIN } from '../actions/actions';

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
    

    case ORDER_ASC: return{
        ...state,
        breeds: state.breeds
        .filter((b) => b.name !== null)
        .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)),
    
}

    case ORDER_DESC: return{
        ...state,
        breeds: state.breeds
		    .filter((b) => b.name !== null)
			.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)),
}

case ORDER_WEIGHTMAX: return{
    ...state,
    breeds: state.breeds
    .filter((b) => b.weight !== null)
    .sort((a, b) => (a.weight > b.weight ? 1 : -1)),
}

case ORDER_WEIGHTMIN: return{
    ...state,
    breeds: state.breeds
    .filter((b) => b.weight !== null)
    .sort((a, b) => (a.weight < b.weight ? 1 : -1)),
}

    case TEMP_FILTER: return {
        ...state,
        filteredBreeds: state.payload
}
    default: return {...state}
    }
}


