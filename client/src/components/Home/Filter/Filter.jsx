import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTemperament, orderAlph, tempFilter, orderWeight, getBreedsByName, getCreateBreedsFromDb, getAllBreeds } from '../../../actions/actions';
import './Filter.css';



function Filter() {
    


    const temperament = useSelector((state) => state.temperament);
    const breeds = useSelector((state) => state.breeds);
    let [filterTemp, setFilterTemp] = useState('');
    const [arrayTemps, setArrayTemps] = useState([]);
    const [input, setInput] = useState({ name: "" });
    const dispatch = useDispatch();
    //const [showNoResult, setShowNoResult] = useState(false);


    useEffect(() => {
        dispatch(getTemperament())
        // dispatch(getBreedsByName())
    }, []);

    useEffect(() => {
        dispatch(getAllBreeds())
        
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        getBreedsByName(input.name);
        // handleClick();
        setInput({ name: "" });
    }
   
    //alfabetico
    function handleChange(e) {
        dispatch(orderAlph(e.target.value))
        // dispatch(orderWeight(e.target.value));
    }
    //peso
    function handleChangeWeight(e) {
        dispatch(orderWeight(e.target.value));
    }
    //basededatos
    function handleInput(event) {
        // setInput({ name: event.target.value });
        dispatch(getCreateBreedsFromDb(event.target.value))
    }

     //temperamento
     function handleChangeTemperament(e) {
        // dispatch(tempFilter(e.target.value))
        setFilterTemp(e.target.value);

        if (e.target.value === 'All'){
            e.preventDefault()
            //reset q vacie
            dispatch(getAllBreeds());
        } 
        console.log(e.target.value)
        
        if (e.target.value){
            if(!arrayTemps.includes(e.target.value)){
                setArrayTemps(
                    [...arrayTemps, e.target.value]
                )
                dispatch(tempFilter(e.target.value));
            }
        }
            
    }




    return (
        <div >

            {/* FILTRO POR ALPHABETICO */}
            <form className="boton">
                <select className="boton" onChange={handleChange} value='' name="by">
                    <option value="" disabled selected>Order by </option>
                    <option value='ORDER_ASC'>Alphabet - A-Z</option>
                    <option value='ORDER_DESC'>Alphabet - Z-A</option>
                </select>
            </form>

            {/* //FILTRO POR PESO WEIGHT  */}
            <form className="boton">
                <select className="boton" onChange={handleChangeWeight} value='' name="by">
                    <option value="" disabled selected>Order by Weight</option>
                    <option value='ORDER_WEIGHTMAX'>Weight Min. - Max.</option>
                    <option value='ORDER_WEIGHTMIN'>Weight Max -  Min.</option>
                </select>
            </form>


            <form className="boton" onSubmit={handleSubmit}>
                <select className="boton" onChange={(e) => handleChangeTemperament(e)} value={filterTemp} name="temperaments">
                    <option value= 'All'>All </option>
                    {temperament.map((e) => (
                        <option  value={e.name} key={e.id}>
                            {e.name}
                        </option>
                    ))}
                    
                </select>
      
                {/* <button type= 'reset' onClick={()=> {window.location.href = "/home"}}> Reset</button>
             */}
             {/* <form onSubmit={(e) => handleSubmit(e)} >
                 <input type= 'submit'></input>
             </form> */}


            </form>
            <form className="boton" onChange={(e) => handleSubmit(e)}>
                <select className="boton" onChange={(e) => handleInput(e)} value='' name="db" >
                    <option value="" disabled selected>All Breeds Created</option>
                    <option value='DB'>Created</option>
					<option value='API'>API</option>
					{/* <option value='ALL'>ALL</option> */}
                    {/* {breeds.map((e) => (
                        <option value={e.name} key={e.id}>
                            {e.name}
                        </option>
                    ))} */}
                </select>
               
            </form>

           
        </div>
    )
}

export default Filter








 // <button type= 'reset' onClick={()=> {window.location.href = "/home"}}> Reset</button> 
// <button className="boton" onClick={(e) => handleClick(e)}>Clear Temperaments</button> 

    //TEMPERAMENTO

    // const handleClick = (e) => {
    //     let filteredBreeds = [];
    //     setShowNoResult(false);
    
    //     if (arrayTemps.length === 0) {
    //         dispatch(tempFilter([]));
        
    //     }
    
    //     // if (!empty) {
    //     //     breeds.forEach((b) => {
    //     //         let temps = b.temperament?.map(t => t.name) ; // ["curious", "active"]
    //     //         for (let i = 0; i < arrayTemps.length; i++) {
    //     //             if (!temps.includes(arrayTemps[i])) {
    //     //                 return
    //     //             }
    //     //         }
    //     //         filteredBreeds.push(b);
    //     //     })
    
    //         // if (filteredBreeds.length === 0) {
    //         //     setShowNoResult(true);
    //         // }
    
    //     // } 
    //     else {
    //         setArrayTemps([])
    //         getAllBreeds()
    //     }
    //     dispatch(tempFilter(filteredBreeds)); //[{}, {}] --> action a redux

    // }