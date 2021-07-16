import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTemperament, orderAlph, tempFilter, orderWeight } from '../../../actions/actions';

    function Filter() {
        useEffect(() => {
            dispatch(getTemperament());
        }, []);


    const temperament = useSelector((state) => state.temperament);
    const breeds = useSelector((state) => state.breeds);
    let [filterTemp, setFilterTemp] = useState('');
    let [filterTempBy, setFilterTempBy] = useState([]);
    const dispatch = useDispatch();


function handleSubmit(e) {
    e.preventDefault();
    setFilterTempBy([...filterTempBy, filterTemp]);
    handleClick();
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

function handleClick() {
    let filteredBreeds = [];
    breeds?.forEach((b) => {
        if (b.id.length > 6) {
            b.temperament.map((t) => (t.name === filterTemp ? filteredBreeds.push(b) : null));
        } else {
            if (b.temperament.includes(filterTemp)) {
                filteredBreeds.push(b);
            } else {
                return null;
            }
        }
    });

    dispatch(tempFilter(filteredBreeds));
}

    return (
        <div >

            {/* FILTRO POR ALPHABETICO */}
            <form>
            <select onChange={handleChange} value='' name="by">
                <option value="" disabled selected>Order by Alphabet</option>
                    <option value='ORDER_ASC'>Alphabet - A-Z</option>
                    <option value='ORDER_DESC'>Alphabet - Z-A</option>
            </select>
            </form>

            {/* //FILTRO POR PESO WEIGHT  */}
            <form>
            <select onChange={handleChangeWeight} value='' name="by">
                <option value="" disabled selected>Order by Weight</option>
                    <option value='ORDER_WEIGHTMAX'>Weight Min. - Max.</option>
                    <option value='ORDER_WEIGHTMIN'>Weight Max -  Min.</option>
            </select>
            </form>


        <form onSubmit={handleSubmit}>
            <select onChange={handleChangeTemperament} value={filterTemp} name="temperament">
                {/* <option value='' disabled selected>Temperament</option> */}
                <option>All Temperaments</option>
					{temperament.map((e) => (
						<option value={e.name} key={e.id}>
							{e.name}
						</option>
					))}
            </select>
</form>
<form>
            <select onChange={handleSubmit} value='' name="order" >
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
