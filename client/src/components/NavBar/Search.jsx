import React, { useEffect, useState } from 'react';
import './Search.css'
import { connect } from 'react-redux';
import { getBreedsByName } from '../../actions/actions';
import { Link } from 'react-router-dom';

function Search({ getBreedsByName, name, onSearch}) {

function getBreedsByNameFunction(){
    getBreedsByName()
}

useEffect(()=>{
    getBreedsByNameFunction()
},[])
const [title, setTitle] =  useState(name)

    function handleChange(event) {
        setTitle(event.target.value);
    }
    async function handleSubmit(event) {
        event.preventDefault();
       
        // setLoading(true);
        // await getBreeds(title);
        // setLoading(false);

    }

    return (
        <div className= 'search'>
            <form onSubmit={(e) => handleSubmit(e) } >
                <input
                    type="text"
                    id="title"
                    autoComplete="off"
                    onChange={(e) => handleChange(e)}
                    placeholder='Search breed'
                    value={title}
                />
                
                <button type="Submit" onClick={handleSubmit}>Search</button>
                
            </form>
        </div>
    )

}

function mapStateToProps(state) {
    return {
        breeds: state.breeds
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getBreedsByName: name => dispatch(getBreedsByName(name)),
        
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);