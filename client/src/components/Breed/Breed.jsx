import React, { useEffect , useState} from 'react';
import './Breed.css';
//import {} from '../../actions/actions';
//import {  } from "react-redux";
import { Link, useParams } from "react-router-dom";
//import axios from 'axios';
import { connect, useDispatch, useSelector } from 'react-redux';
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


  

function Breed(props){

const {id}= useParams()
const dispatch = useDispatch();
  // function getBreedsByIdFunction (){
  //   getAllById()
  // }
    useEffect(() => {
      dispatch(getAllById(id))
        
    }, [])
    // console.log(detail)
    
    return (
        <div className= 'body4'>
      
<div >
    <img src={props.breedsDetail.image} width="360" height="240" alt="" />
    <div >
        <div ><p>Name:</p><p>{props.breedsDetail.name}</p></div>
        <div ><p>Temperament:</p><p>{props.breedsDetail.temperament}</p></div>
        <div ><p>Weight:</p><p>{props.breedsDetail.weight}</p></div>
        <div ><p>Height:</p><p>{props.breedsDetail.height}</p></div>
        <div ><p>Life span:</p><p>{props.breedsDetail.life_span}</p></div>
    </div>
</div>

          <div>
          <Link to='/home'>
<button >Back</button>
</Link>
<div >
  {/* <div><span>Loading..</span></div> */}
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
      breedsDetail: state.breedsDetail,
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
// export default Breed;






// import React from 'react';
// import { connect } from 'react-redux';
// import './Breed.css';
// import {getAllById} from '../../actions/actions';
// import { useParams } from 'react-router-dom';


// class Breed extends React.Component {

//     componentDidMount() {
//         // ya sabemos que el componente fue montado
//         // ahora podemos empezar a realizar acciones con el mismo
//         // por ejemplo ... consultas con la api ..... entonces puedo invocar a la accion
//         // getMovieDetail !
//         this.props.getAllById(this.props.match.params.id)
//     }

//     render() {
//         return (
//             <div className="movie-detail">
//                 {this.props.breedsDetail ?
//                     <div>
//                         <div>
//                             <span>
//                                 Title:
//                             </span>
//                             <span>
//                                 {this.props.breedsDetail.name}
//                             </span>
//                         </div>
//                         <img src={this.props.breedsDetail.image} alt={"img"}/>
//                     </div>
//                     : <h1>Cargando ...</h1>
//                 }
//             </div>
//         );
//     }
// }

// function mapStateToProps(state){
//     return {
//         breedsDetail : state.breedsDetail
//     }
// }

// export default connect(mapStateToProps, {getAllById})(Breed);
