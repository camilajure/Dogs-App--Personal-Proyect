import {GET_BREEDS, GET_ID, GET_BYNAME, GET_TEMPERAMENT,POST_BREED, ORDER_ASC,
    ORDER_DESC, TEMP_FILTER, ORDER_WEIGHTMAX, ORDER_WEIGHTMIN, DB, API } from '../actions/actions';

const initialState = {
    breeds: [],
    temperament: [],
    breedsDetail :{},
    filteredBreeds: [],
    breedsbyname:[]
    
}

//tempe / todos breeds
function filterTemperament (breeds, temperament){
    let filteredBreeds =[]
    
if (temperament  === 'All Temperaments') return breeds
else{
filteredBreeds = breeds.filter(e => e.temperament.includes(temperament))
// if (typeof temperament === 'string') temperament.split(,)
} 
return filteredBreeds

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
        breedsbyname: action.payload,
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
        filteredBreeds: filterTemperament(state.breeds, action.payload)
}
    case DB: return {
		...state,
		breeds: state.breeds.filter((b) => b.id.length > 6).sort((a, b) => (a.id > b.id ? 1 : -1)),
};
	case API: return {
		...state,
		breeds: state.breeds.filter((b) => b.id < 500),
};
    default: return {...state}
    }
}


