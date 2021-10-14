import React, { useState } from 'react'

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (inputValue.trim().length > 0 ) {
            setCategories( (cat) => [inputValue,...cat]);
            setInputValue('');

        }


    }



    return (
        <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} value={inputValue}/>
        </form>
    )
}

export default AddCategory
