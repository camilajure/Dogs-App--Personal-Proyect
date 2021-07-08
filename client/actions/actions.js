import axios from 'axios';

export function getBreeds(){
    return function(dispatch){
        return axios.get('http://localhost:3001/breeds')
        .then(breeds => {
            dispatch({
                type:'GET_BREEDS',
                payload: breeds.data
            })
        })
    }
};


export function getBreedsById(id){
    return function(dispatch){
        return axios.get(`http://localhost:3001/breeds/${id}`)
        .then(breedsId => {
            dispatch({
                type:'GET_ID',
                payload: breedsId.data
            })
        })
    }
};



export function getBreedsByName(name){
    return function(dispatch){
        return axios.get(`http://localhost:3001/breeds?name=${name}`)
        .then(breedsByName => {
            dispatch({
                type:'GET_BYNAME',
                payload: breedsByName.data
            })
        })
    }
};


export function getTemperament(){
    return function(dispatch){
        return axios.get('http://localhost:3001/temperament')
        .then(breedsTemperament => {
            dispatch({
                type:'GET_TEMPERAMENT',
                payload: breedsTemperament.data
            })
        })
    }
};


export const GET_BREEDS = 'GET_BREEDS';
export const GET_ID = 'GET_ID';
export const GET_BYNAME = 'GET_BYNAME';
export const GET_TEMPERAMENT = 'GET_TEMPERAMENT';

