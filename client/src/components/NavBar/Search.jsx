import React, {  useState } from "react";
import { connect } from "react-redux";

import './Search.css';
import { getBreedsByName } from "../../actions/actions";

function Search (props) {

    const [input, setInput] = useState({name: ""});

function handleChange(event) {
    setInput({ name: event.target.value });
    }

function handleSubmit(event) {
    event.preventDefault();
    props.getBreedsByName(input.name);
    }

    return (
    <div>
        <form className="search" onSubmit={(e) => handleSubmit(e)}>
            <div>
            
            <input
                name="title"
                type="text"
                id="title"
                autoComplete="off"
                value={input.name}
                onChange={(e) => handleChange(e)}
            />
        </div>
            <button type="submit">Search</button>
        </form>
    </div>
    );
}


function mapStateToProps(state){
    return{
        breeds: state.breeds
    }
}

function mapDispatchToProps(dispatch){

    return {
    getBreedsByName: name => dispatch(getBreedsByName(name)),
    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
