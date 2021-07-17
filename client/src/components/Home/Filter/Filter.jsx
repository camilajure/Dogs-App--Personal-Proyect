import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTemperament, orderAlph, tempFilter, orderWeight, getBreedsByName } from '../../../actions/actions';
import './Filter.css';
    function Filter() {
        useEffect(() => {
            dispatch(getTemperament())
            dispatch(getBreedsByName())
        }, []);


    const temperament = useSelector((state) => state.temperament);
    const breeds = useSelector((state) => state.breeds);
    let [filterTemp, setFilterTemp] = useState('');
    const [input, setInput] = useState({name: ""});
    const dispatch = useDispatch();


function handleSubmit(e) {
    e.preventDefault();
    getBreedsByName(input.name);
    handleClick();
    setInput({name:""});
    }
//temperamento
function handleChangeTemperament(e) {
    setFilterTemp(e.target.value);
}
//alfabetico
function handleChange(e) {
    dispatch(orderAlph(e.target.value));
}
//peso
function handleChangeWeight(e) {
    dispatch(orderWeight(e.target.value));
}
function handleInput(event) {
    setInput({ name: event.target.value });
    }

function handleClick() {
    
}

    return (
        <div >

            {/* FILTRO POR ALPHABETICO */}
            <form className="boton">
            <select onChange={handleChange} value='' name="by">
                <option value="" disabled selected>Order by Alphabet</option>
                    <option value='ORDER_ASC'>Alphabet - A-Z</option>
                    <option value='ORDER_DESC'>Alphabet - Z-A</option>
            </select>
            </form>

            {/* //FILTRO POR PESO WEIGHT  */}
            <form className="boton">
            <select onChange={handleChangeWeight} value='' name="by">
                <option value="" disabled selected>Order by Weight</option>
                    <option value='ORDER_WEIGHTMAX'>Weight Min. - Max.</option>
                    <option value='ORDER_WEIGHTMIN'>Weight Max -  Min.</option>
            </select>
            </form>


        <form className="boton" onSubmit={handleSubmit}>
            <select onChange={handleChangeTemperament} value='' name="temperament">
                {/* <option value='' disabled selected>Temperament</option> */}
                <option>All Temperaments</option>
					{temperament.map((e) => (
						<option value={e.name} key={e.id}>
							{e.name}
						</option>
					))}
            </select>
</form>
<form className="boton" onChange={(e) => handleSubmit(e)}>
            <select onChange={(e) => handleInput(e)} value='' name="order" >
                <option value="" disabled selected>All Breeds</option>
                    <option>All Breeds</option>
                    {breeds.map((e) => (
						<option value={e.name} key={e.id}>
							{e.name}
						</option>
                        ))}
            </select>
            </form>
        </div>
    )
}

export default Filter
