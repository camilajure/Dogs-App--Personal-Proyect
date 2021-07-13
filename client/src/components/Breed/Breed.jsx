import React, { useEffect , useState} from 'react';
import './Breed.css';
//import {} from '../../actions/actions';
//import {  } from "react-redux";
import { Link } from "react-router-dom";
//import axios from 'axios';
import { connect } from 'react-redux';
import { getAllById } from '../../actions/actions';


// const renderCardId=(breedsDetail)=> {
//   return (
//   <div>{breedsDetail.map((breedsDetail) => {
      
//     return(
  
// <div >
//     <img src={breedsDetail.image} width="360" height="240" alt="" />
//     <div >
//         <div ><p>Name:</p><p>{breedsDetail.name}</p></div>
//         <div ><p>Temperament:</p><p>{breedsDetail.temperament}</p></div>
//         <div ><p>Weight:</p><p>{breedsDetail.weight}</p></div>
//         <div ><p>Height:</p><p>{breedsDetail.height}</p></div>
//         <div ><p>Life span:</p><p>{breedsDetail.lifespan}</p></div>
//     </div>
// </div>
//     ) 
// }
//   )}
//   </div>
//   )}


  

function Breed({breeds, getAllById}){
  // const [card, setCard] = useState([])
  //   function getBreedsById(id){
  //       return axios.get(`http://localhost:3001/breeds/${id}`)
  //       .then(card => setCard(card.data))
  //   }
  function getBreedsByIdFunction (){
    getAllById()
  }
    useEffect(() => {
      getBreedsByIdFunction()
        
    }, [])
    console.log(breeds)
    
    return (
        <div className= 'body4'>
         
          <div>{breeds.map((id) => {
      
      return(
    
  <div >
      <img src={id.image} width="360" height="240" alt="" />
      <div >
          <div ><p>Name:</p><p>{id.name}</p></div>
          <div ><p>Temperament:</p><p>{id.temperament}</p></div>
          <div ><p>Weight:</p><p>{id.weight}</p></div>
          <div ><p>Height:</p><p>{id.height}</p></div>
          <div ><p>Life span:</p><p>{id.lifespan}</p></div>
      </div>
  </div>
      ) 
  }
    )}
    </div>





          <div>
          <Link to='/home'>
<button >Back</button>
</Link>
<div >
  <div><span>Loading..</span></div>
</div> 
            </div>
        </div>

/* <div className= 'body4'>
{renderCard(card)}
<div>

</div>
<Link to='/home'>
<button >Back</button>
</Link>
<div >
  <div><span>Loading..</span></div>
</div> 
</div> */
    )
}

function mapStateToProps(state) {
    return {
        breeds: state.breeds,
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      getAllById: breeds => dispatch(getAllById(breeds)),
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Breed);
