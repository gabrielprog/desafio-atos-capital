import React from 'react';

function InputSearch({onChange, value, disbabled = false}){
    return (
        <input
            type="text"
            className="form-control bg-transparent border-0 rounded-0" 
            placeholder="Procurar..."
            onChange={onChange}
            value={value}
            disabled={disbabled}
        />
    );
};

export default InputSearch;