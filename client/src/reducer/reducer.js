import {GET_BREEDS, GET_ID, GET_BYNAME, GET_TEMPERAMENT } from '../actions/actions';

const initialState = {
    breeds: [],
    temperament: [],
    breedsDetail :[],
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
        breeds: action.payload,
    }
    case  GET_BYNAME: return {
        ...state,
        breeds: action.payload,
    }
    default: return {...state}
    }
}