import React from 'react';

const Input = props => (
    <div className="input">
        <label className="label" htmlFor={props.name}>
            {props.label}
        </label>
        <input
            className="input-element" 
            id={props.name} 
            name={props.name} 
            type={props.type}
            placeholder={props.placeholder}
            value={props.value} 
            onChange={props.changed}
        />
    </div>
 
);

export default Input;