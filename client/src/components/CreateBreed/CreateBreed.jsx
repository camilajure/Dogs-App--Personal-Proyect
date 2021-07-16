import React, {  useEffect, useState } from 'react';
import './CreateBreed.css';
import {getBreeds, getTemperament, postBreed} from '../../actions/actions';
import { useDispatch, useSelector} from 'react-redux';
//import axios from 'axios';
import { connect } from 'react-redux';

function CreateBreed(props) {
    const [input, setInput] = React.useState({
		name: '',
		heightMax: '',
        heightMin: '',
		weightMax: '',
        weightMin: '',
		lifeSpan: '',
		temperament: [],
        image:''
	});

function createBreedFunction(){
    postBreed()
    getTemperament();
}
useEffect(() =>{
    createBreedFunction()
},[])

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit  (e){
        e.preventDefault();
        
                
                setInput({
            name: '',
            heightMax: '',
            heightMin: '',
            weightMax: '',
            weightMin: '',
            lifeSpan: '',
            temperament: [],
        });
            }
function handleSelect(e){
    if (input.temperament.length >= 3) {
        alert('Select only 3 temperaments.');
    } else {
        setInput((prev) => ({ ...prev, temperament: [...prev.temperament, parseInt(e.target.value)] }));
    }
}


    
    const temperament = useSelector((input) => input.temperament);
    const dispatch = useDispatch();

//     function handleOnChange(e){
//         setInput({
//             ...input,
//             [e.target.name]: e.target.value,
//         });
//     }



// function handleSelect(e){
//     if (input.temperament.length >= 3) {
//         alert('Select only 3 temperaments.');
//     } else {
//         setInput((prev) => ({ ...prev, temperament: [...prev.temperament, parseInt(e.target.value)] }));
//     }
// }

// const handleSubmit = (e)=>{
//     e.preventDefault();
    
//             axios.post('http://localhost:3001/breeds', input)
// 			dispatch(getBreeds())
//         }			

        // setInput({
        //     name: '',
        //     heightMax: '',
        //     heightMin: '',
        //     weightMax: '',
        //     weightMin: '',
        //     lifeSpan: '',
        //     temperament: [],
        // });



            function getNames(arr) {
                let names = [];
                temperament.forEach((t) => {
                    arr.forEach((id) => {
                        if (parseInt(id) === t.id) {
                            names.push(t.name);
                        }
                    });
                });
                return names;
            }


            // useEffect(() => {
            //     dispatch(getTemperament());
            // }, []);
        
            
            // const [errors, setErrors] = useState({});
        
        

    return (
        <div className= 'body2'>
            <h1>CREATE BREED</h1> 
            <form onSubmit={handleSubmit}>
                <p>Name</p>
                <input type="text"
                    id="title"
                    autoComplete="on"
                    placeholder='Name breed'
                    value={input.name}
                    onChange= {handleChange}/>
                
                <p>Height</p>
                <input type="number"
                    id=""
                    autoComplete="off"
                    placeholder='Height Maximun'
                    value={input.heightMax}
                    onChange= {handleChange}/>
                <input type="number"
                    id="title"
                    autoComplete="off"
                    placeholder='Height Minimun'
                    value={input.heightMin}
                    onChange= {handleChange}/>

                <p>Weight Kg</p>
                <input type="number"
                    id=""
                    autoComplete="off"
                    placeholder='Weight Maximun'
                    value={input.weightMax}
                    onChange= {handleChange}/>
                <input type="number"
                    id="title"
                    autoComplete="off"
                    placeholder='Weight Minimun'
                    value={input.weightMin}
                    onChange= {handleChange}/>

                    <p>Life span</p>
                <input type="number"
                    id="title"
                    autoComplete="off"
                    placeholder='Years of Life Span'
                    value={input.lifeSpan}
                    onChange= {handleChange}/>

                <p>Temperaments</p>
                <select
						name='temperaments'
						onChange={(e) => handleSelect(e)}
						required
						value={input.temperament}
					>{temperament.map((e) => (
						<option value={e.name} key={e.id}>
							{e.name}
						</option>
                        ))}
						<option>Select</option>
					</select>
                    {input.temperament.map((t) => (
						<p id={t} >
							{getNames([t])}{' '}
							<button type='button' >
								Delete
							</button>
						</p>
					))}


        <p>Image</p>
              <input type="url" onChange={handleChange} value={input.image} name="Image" placeholder="Url"/>

                <p>Create</p>
                
                <button type= "Submit"> Add Breed</button>
            </form>
        </div>
    )
}


// function mapDispatchToProps(dispatch){
//     return{
//         getTemperament: breed => dispatch (getTemperament(breed))
//     }
// }


// export default connect (null, mapDispatchToProps)(CreateBreed);
export default CreateBreed;