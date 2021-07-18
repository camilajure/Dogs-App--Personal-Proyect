import React, {  useEffect, useState } from 'react';
import './CreateBreed.css';
import {getBreeds, getTemperament, postBreed} from '../../actions/actions';
import { useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import { connect } from 'react-redux';

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
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});

    useEffect(() => {

        handleDispatch();
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
        //     let {name,height,weight, life_span, image}= input
        // let body= {name, height, weight, life_span, temperament, image}



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
                

    //     if (!errors.name && !errors.weight && !errors.height && !errors.life_span) {
    //     axios
    //     .post('http://localhost:3001/breeds', input)
    //     .then((r) => {
    //         alert('Breed created successfully!');
                
    //             setInput({
    //         name: '',
    //         heightMax: '',
    //         heightMin: '',
    //         weightMax: '',
    //         weightMin: '',
    //         lifeSpan: '',
    //         temperament: [],
    //     })
    //         })
    //         .catch((res) => alert('We could not create breed. Please try again.'));
    //     }
    // else {
	// 		alert('Something went wrong. Please try again.');
	// 	}
     }

            


        function handleDispatch() {
            props.getTemperament()
                
        }


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

            const deleteTemp = (id) => {
                setInput({
                    ...input,
                    temperament: input.temperament.filter(temp => parseInt(temp) !== id)
                })
        
            }

        

    return (
        <div className= 'body2'>
            <h1>CREATE BREED</h1> 
            <form onSubmit={(e)=> handleSubmit(e)}>
                
                <div>
                <p>Name</p>
                <input type="text"
                    id="title"
                    name='name'
                    required="required"
                    autoComplete="on"
                    placeholder='Name breed'
                    value={input.name}
                    onChange= {handleChange}/>
            </div>

                <p>Height  Min-Max</p>
                <input type="text"
                name='height'
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
                    autoComplete="off"
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
                    autoComplete="off"
                    placeholder='Years of Life Span'
                    value={input.life_span}
                    onChange= {handleChange}/>

                <p>Temperaments</p>
                <select
						name='temperament'
						onChange={(e) => handleSelect(e)}
						required
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
                            
							<button type='button'onClick={(e) => deleteTemp(e, t)} >
								Delete
							</button>
						</p>
					))}
</div>

        {/* <p>Image</p>
              <input type="url" onChange={handleChange} value={input.image} name="image" placeholder="Url"/> */}

                <p>Create</p>
                
                <button type= "submit"> Add Breed</button>
            </form>
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