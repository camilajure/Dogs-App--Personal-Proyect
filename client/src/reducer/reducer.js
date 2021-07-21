
import {GET_BREEDS, GET_ID, GET_BYNAME, GET_TEMPERAMENT,POST_BREED, ORDER_ASC,
    ORDER_DESC, TEMP_FILTER, ORDER_WEIGHTMAX, ORDER_WEIGHTMIN, DB, API , ALL} from '../actions/actions';

const initialState = {
    breeds: [],
    temperament: [],
    breedsDetail :[],
    filteredBreeds: [],
    // breedsbyname:[]//este sacar ver
    
}

// //tempe / todos breeds
// function filterTemperament (breeds, temperament){
//     let filteredBreeds =[]
    
// //    if (breeds.DB === temperament.name ) return breeds
// //   videogames.filter(e => e.genres.map((genre)=>(genre.name)).includes(genre))

// if (temperament  === 'All Temperaments') return breeds
// else{
//     //hacer un for  para ver si hay en la base de datos  y si hay algo en la db 
//     //tiene que filtrar complicadamente y si no tinee nada lo de db hace lod eabajo
//      for( let breed of breeds ) {
// if (breed.hasOwnProperty('temperaments')) {
//     //que filtre por temperaments.name eso en un var aux ,y despues que filtre por el includes en var aux,
//     // y despues concatenas y eso es filterbreeds l oconcatenado a los dos fitlers 
//     filteredBreeds = breeds.filter(e => e.temperaments.name}
// else{ filteredBreeds = breeds.filter(e => e.temperament.includes(temperament))}
//     }

// // filteredBreeds = breeds.filter(e => e.temperament.map((temperament)=>(temperaments.name)).includes(temperament))

// } 
// return filteredBreeds

// }
//tempe / todos breeds
//funciona sin creados
// function filterTemperament (breeds, temperament){
//     let filteredBreeds =[]
    
// if (temperament  === 'All Temperaments') return breeds
// else{
//     filteredBreeds = breeds.filter(e => e.temperament? e.temperament.includes(temperament) 
// : breeds.filter( e =>e.temperaments && e.temperaments.map(e => e.name === temperament)))
// // filteredBreeds =  breeds.filter( e =>e.temperaments && e.temperaments.map(e => e.name === temperament))
// // if (typeof temperament === 'string') temperament.split(,)
// } 
// return filteredBreeds

// }
//filterbreeds sea igual a breeds
// function filterTemperament(breeds, temperament) {
//     let filteredBreeds = []

//     if (temperament === 'All Temperaments') return breeds
//     else {
//         filteredBreeds = breeds.filter(e => !Array.isArray(e.temperaments) ? e.temperaments.includes(temperament) : breeds.filter(e => e.temperaments && e.temperaments.split(", ").map((temp) => {
//                 return {
//                     name: temp
//                 }
//             }))
//             // if (typeof temperament === 'string') temperament.split(,)
//         )}
//         return filteredBreeds
//     }
export default function reducer(state = initialState, action) {
    switch (action.type) {
    case GET_BREEDS: return {
        ...state,
        breeds: action.payload,
        //filteredBreeds:action.payload no va por q resetea 
        
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
        // breeds: action.payload,
        filteredBreeds:action.payload
    }
    // case POST_BREED: return{
    //     ...state,
    //     breeds: state.breeds.concat(action.payload),
        
    // }
    

    case ORDER_ASC: return{
        ...state,
        breeds: state.breeds
        .filter((b) => b.name !== null)
        .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)),
        filteredBreeds: state.filteredBreeds.filter((b) => b.name !== null)
        .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)),
    
}

    case ORDER_DESC: return{
        ...state,
        breeds: state.breeds
		    .filter((b) => b.name !== null)
			.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)),
            filteredBreeds: state.filteredBreeds.filter((b) => b.name !== null)
			.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)),
}

case ORDER_WEIGHTMAX: return{
    ...state,
    breeds: state.breeds
    .filter((b) => b.weight !== null)
    .sort((a, b) => (a.weight > b.weight ? 1 : -1)),
    filteredBreeds: state.filteredBreeds.filter((b) => b.weight !== null)
    .sort((a, b) => (a.weight > b.weight ? 1 : -1)),
}

case ORDER_WEIGHTMIN: return{
    ...state,
    breeds: state.breeds
    .filter((b) => b.weight !== null)
    .sort((a, b) => (a.weight < b.weight ? 1 : -1)),
    filteredBreeds: state.filteredBreeds.filter((b) => b.weight !== null)
    .sort((a, b) => (a.weight < b.weight ? 1 : -1)),
}

    case TEMP_FILTER:{
        // ...state,
        // filteredBreeds: filterTemperament(state.breeds, action.payload)
      
        let filtapi = state.breeds.filter( e => e.temperament?.includes(action.payload))
        let filtdb = state.breeds.filter(e => e.temperaments?.map((temp)=> temp.name)?.includes(action.payload))
        
        let newArrayFil= filtapi.concat(filtdb)

        if(action.payload === 'All'){
            return{
                ...state,
                filteredBreeds: state.breeds
                
            }
        }else{
            return{
                ...state,
                //breeds: newArrayFil,
                filteredBreeds: newArrayFil,
            }
        }
}
    case DB: return {
		...state,
		breeds: state.breeds.filter((b) => b.db ),
        filteredBreeds: state.filteredBreeds.filter((b) => b.db),
        
};
	case API: return {
		...state,
		breeds: state.breeds.filter((b) => !b.db),
        filteredBreeds:state.filteredBreeds.filter((b) => !b.db),
};
case ALL: 
            return {
                ...state,
                breeds: state.breeds,
                filteredBreeds:state.filteredBreeds
            }
    default: return {...state}
    }
}


// {loading ? 
//     <div className='containerLoading'>
//         <img src="https://media4.giphy.com/media/kHgUVJysYKJjzJf1XY/source.gif" alt="LoadingGif" className='loadingGif' /> 
//     </div> 
//             : renderizado de perros normal