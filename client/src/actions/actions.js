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

// export function postBreed (breeds){
//     return (dispatch)=>{
//     return axios.post('http://localhost:3001/breeds', breeds, {
//         headers: {"Content-Type": "application/json"},
//     })
//     .then((response) =>{
//         dispatch({
//             type: 'POST_BREED',
//             payload: response.data.createBreed
//         })
//     });
// }
// }


//FILTROS!!
export function ordenar(order, category) {

    return { type: order === 'asc' ? ORDER_ASC : ORDER_DESC, payload: category };
  };
  


export const sortByAlphabet = payload => ({
    type: 'SORT_BY_ALPHABET',
    payload
 });



export const GET_BREEDS = 'GET_BREEDS';
export const GET_ID = 'GET_ID';
export const GET_BYNAME = 'GET_BYNAME';
export const GET_TEMPERAMENT = 'GET_TEMPERAMENT';
export const POST_BREED = 'POST_BREED';

export const SORT_BY_ALPHABET = 'SORT_BY_ALPHABET';

export const ORDER_ASC = 'ORDER_ASC';
export const ORDER_DESC = 'ORDER_DESC';