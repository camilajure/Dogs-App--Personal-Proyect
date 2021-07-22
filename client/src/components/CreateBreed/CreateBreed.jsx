import React, {  useEffect, useState } from 'react';
import './CreateBreed.css';
import {getBreeds, getTemperament} from '../../actions/actions';
import { useDispatch, useSelector} from 'react-redux';
//import axios from 'axios';
import { connect } from 'react-redux';
import {useHistory} from 'react-router-dom';

function CreateBreed(props) {
    const [input, setInput] = useState({
		name:'',
		height:'',
        weight:'',
		life_span:'',
		temperament: [],
        image:''
	});
    const temperament = useSelector((input) => input.temperament);
    // const dispatch = useDispatch();
    // const [errors, setErrors] = useState({});
const history = useHistory();

    useEffect(() => {
        getTemperament()
        // handleDispatch();
      }, [])

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }



   async function handleSubmit  (e){
        e.preventDefault();
        try{
                await fetch('http://localhost:3001/breeds',
            {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(input),
            })
            alert('Breed created successfully!');
        } catch(err){
            console.log(err.message)
            alert('We could not create breed. Please try again.');
        }
        setInput({
                    name: '',
                    height:'',
                    weight: '',
                    life_span: '',
                    temperament: [],
                })
                history.push('/');
            }

         


        // function handleDispatch() {
        //     props.getTemperament()
                
        // }


function handleSelect(e){
    if (input.temperament.length >= 3) {
        alert('Select only 3 temperaments.');
    } else {
        setInput((prev) => ({ ...prev, temperament: [...prev.temperament, parseInt(e.target.value)] }));
    }
}



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

            function deleteTemp  (e,t)  {
                setInput((prev) => ({ ...prev, temperament: prev.temperament.filter((temp) => temp !== parseInt(t)) }));
            }

        

    return (
        <div className= 'body2'>
             
            <div className= 'bodycard'>
            <form onSubmit={(e)=> handleSubmit(e)}>
                
                <div className="containerform">
                <h1 >Create a New Breed</h1>

                <p>Name</p>
                <input type="text"
                    id="title"
                    
                    name='name'
                    required="required"
                    autoComplete="on"
                    placeholder='Name breed'
                    value={input.name}
                    onChange= {handleChange}/>
            
                
                <p>Height  Min-Max</p>
                <input type="text"
                name='height'
                required="required"
                min='0'
                    max='3'
                    autoComplete="off"
                    placeholder='Height Min-Max'
                    value={input.height}
                    onChange= {handleChange}/>
                    
{/* 
                <input type="number"
                    name='heightMin'
                    autoComplete="off"
                    placeholder='Height Minimun'
                    value={input.heightMin}
                    onChange= {handleChange}/> */}

                <p>Weight Kg   Min-Max </p>
                <input type="text"
                    name='weight'
                    required="required"
                    autoComplete="off"
                    min='0'
                    max='100'
                    placeholder='Weight Min-Max'
                    value={input.weight}
                    onChange= {handleChange}/>
                   
{/* 
                <input type="number"
                    name='weightMin'
                    autoComplete="off"
                    placeholder='Weight Minimun'
                    value={input.weightMin}
                    onChange= {handleChange}/> */}
                    
                    <p>Life span</p>
                <input type="number"
                    name='life_span'
                    required="required"
                    autoComplete="off"
                    min='0'
                    max='25'
                    placeholder='Years of Life Span'
                    value={input.life_span}
                    onChange= {handleChange}/>

                <p>Temperaments</p>
                <select
						name='temperament'
						onChange={(e) => handleSelect(e)}
						required="required"
						value={input.temperament}
                        > {props.temperament && props.temperament.map(breed => (
                            <option value={breed.id}>{breed.temperament}{breed.name}</option>
                        ))}
					{/* // >{temperament.map((e) => ( */}
					{/* // 	<option value={e.name} key={e.id}>
					// 		{e.name}
					// 	</option>
                    //     ))} */}
						<option>Select</option>
					</select>
                    <div>
                    {input.temperament.map((t) => (
						<p id={t} >
							{getNames([t])}{' '}
                            
							<button  type='buttondelete'onClick={(e) => deleteTemp(e, t)} >
								Delete
							</button>
						</p>
					))}
</div>

        {/* <p>Image</p>
              <input type="url" onChange={handleChange} value={input.image} name="image" placeholder="Url"/> */}

                
                
                <button className= 'button1' type= "submit"> Add Breed</button>
                </div>
            </form>
        </div>
        </div>
    )
}
function mapStateToProps(state) {
    return {
        temperament: state.temperament
    }
    }

function mapDispatchToProps(dispatch){
    return{
        getTemperament: breed => dispatch (getTemperament(breed))
    }
}


export default connect ( mapStateToProps , mapDispatchToProps)(CreateBreed);
// export default CreateBreed;