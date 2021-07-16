import React, { useEffect , useState} from 'react';
import './Breed.css';
import { Link, useParams } from "react-router-dom";
import { connect, useDispatch } from 'react-redux';
import { getAllById } from '../../actions/actions';


function Breed(props){

const {id}= useParams()
const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getAllById(id))
        
    }, [])
    
    
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



// class Breed extends React.Component {

//     componentDidMount() {
//         // ya sabemos que el componente fue montado
//         // ahora podemos empezar a realizar acciones con el mismo
//         // por ejemplo ... consultas con la api ..... entonces puedo invocar a la accion
//         // getMovieDetail !
//         this.props.getAllById(this.props.match.params.id)
//     }

