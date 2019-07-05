import React from 'react';

const Select = props => (
    <div className="input">
        <label className="label" htmlFor={props.name}>
            {props.label}
        </label>
        <select 
            className="input-element" 
            id={props.name} 
            name={props.name} 
            value={props.value} 
            onChange={props.changed}
        >
            <option value="">{`--Select ${props.label}--`}</option>
            {props.options}
        </select>
    </div>
 
);

export default Select;