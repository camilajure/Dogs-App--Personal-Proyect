import axios from 'axios';

export function getAllBreeds(){
    return  function(dispatch){
        return axios.get('http://localhost:3001/breeds')
            .then((response) => {
                dispatch({
                type:'GET_BREEDS',
                payload: response.data,
            })
        })
        }
    }


// export const getSoilData = (polygonId) => {
//     return function (dispatch) {
//         axios
//             .get(`https://api.agromonitoring.com/agro/1.0/soil?polyid=${polygonId}&appid=b18836b4cf50726ea1bcdc1073c39105`)
//             .then((r) => r.data)
//             .then((data) => {
//                 dispatch({
//                     type: GET_SOIL_DATA,
//                     payload: data
//                 });
//             });
//     }
// }




// export function getRecipesByName(name) {      //accion que me trae las recetas por nombre
//     return function (dispatch) {
//         return fetch ('http://localhost:5000/recipes?name=' + name)
//             .then(response => response.json())
//             .then(json => {
//                 dispatch({
//                     type: 'GET_RECIPES_BY_NAME',
//                     payload: json
//                 });
//             });
//     };
// }



export function getAllById(id){
    return  function(dispatch){
        return axios.get(`http://localhost:3001/breeds/${id}`)
        .then((response)=>{
            dispatch({
                type:'GET_ID',
                payload: response.data,
            })
        })
        }
    };



export function getBreedsByName(name){
    return function(dispatch){
        return axios.get(`http://localhost:3001/breeds?name=${name}`)
        .then((response) => {
            dispatch({
                type:'GET_BYNAME',
                payload: response.data,
            })
        })
    }
};


export function getTemperament(id){
    return function(dispatch){
        return axios.get('http://localhost:3001/temperament')
        .then((response) => {
            dispatch({
                type:'GET_TEMPERAMENT',
                payload: response.data,
            })
        })
    }
};


// export function postBreed (payload){
//     return axios.post('http://localhost:3001/breeds', payload)
//     .then(response => console.log(response))
//     .catch(err=>console.log(err));
// }

export function postBreed (){
    return (dispatch)=>{
    return axios.post('http://localhost:3001/breeds', {
        headers: {"Content-Type": "application/json"},
    })
    .then((response) =>{
        dispatch({
            type: 'POST_BREED',
            payload: response.data
        })
    });
}
}


//FILTROS!!
export function orderAlph(value) {

    if (value === 'ORDER_ASC') {
		return {
			type: 'ORDER_ASC',
		};
	} else {
		return {
			type: 'ORDER_DESC',
		};
	}
}

export function orderWeight(value) {

    if (value === 'ORDER_WEIGHTMAX') {
		return {
			type: 'ORDER_WEIGHTMAX',
		};
	} else {
		return {
			type: 'ORDER_WEIGHTMIN',
		};
	}
}

export function tempFilter(value){
    return{
    type: 'TEMP_FILTER',
    payload: value,
    }
}

export function getCreateBreedsFromDb(value) {
	if (value === 'DB') {
		return {
			type: 'DB',
		};
	} else if (value === 'API'){
		return {
			type: 'API',
		};
	}else {
		return (getAllBreeds())
	}
}



export const GET_BREEDS = 'GET_BREEDS';
export const GET_ID = 'GET_ID';
export const GET_BYNAME = 'GET_BYNAME';
export const GET_TEMPERAMENT = 'GET_TEMPERAMENT';
export const POST_BREED = 'POST_BREED';

export const ORDER_ASC = 'ORDER_ASC';
export const ORDER_DESC = 'ORDER_DESC';
export const ORDER_WEIGHTMAX = 'ORDER_WEIGHTMAX';
export const ORDER_WEIGHTMIN = 'ORDER_WEIGHTMIN';
export const TEMP_FILTER = 'TEMP_FILTER';
export const DB = 'DB';
export const API= 'API';