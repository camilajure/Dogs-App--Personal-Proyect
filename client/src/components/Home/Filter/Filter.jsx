import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { ordenar } from '../../../actions/actions';

function Filter() {


    // function sortAsc(arr, field) {
    //    return arr.sort(function (a, b) {
    //        if (a[field] > b[field]) {
    //            return 1;
    //        }
    //        if (b[field]> a[field]) {
    //            return -1;
    //        }
    //        return 0;
    //    })
    // }

    
// function sortDesc(arr, field) {
//    return arr.sort(function (a, b) {
//        if (a[field] > b[field]) {
//            return -1;
//        }
//        if (b[field]> a[field]) {
//            return 1;
//        }
//        return 0;
//    })
// }
const [selectedOrd, setSelectedOrd] = useState('asc');
const [selectedCat, setSelectedCat] = useState('name')

const dispatch = useDispatch();

function handleChange(ev) {
    if (ev.target.value === 'name' || ev.target.value === 'weight') {
        setSelectedCat(ev.target.value);
    } else {

        setSelectedOrd(ev.target.value);
    }
}

function handlesubmit(ev) {
    ev.preventDefault();

    dispatch(ordenar(selectedOrd, selectedCat));

}



    return (
        <div onsubmit= {handlesubmit}>
            <select onChange={handleChange} value={selectedOrd} name="by">
                <option value="" disabled selected>Order by</option>
                    <option value='asc'>Alphabet - A-Z</option>
                    <option value='desc'>Alphabet - Z-A</option>
            </select>

            <select onChange={handleChange} >
                <option value="" disabled selected>Temperament</option>
                    <option></option>
            </select>

            <select onChange={handleChange} value={selectedCat} name="order" >
                <option value="" disabled selected>Breed</option>
                    <option></option>
            </select>
            <button type='submit'>Sort</button>
        </div>
    )
}

export default Filter
