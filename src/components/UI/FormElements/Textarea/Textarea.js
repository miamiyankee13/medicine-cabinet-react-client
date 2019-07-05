import React from 'react';

const Textarea = props => (
    <div className="input">
        <label className="label" htmlFor={props.name}>
            {props.label}
        </label>
        <textarea
            className="input-element" 
            id={props.name} 
            name={props.name}
            rows={props.rows}
            cols={props.cols} 
            placeholder={props.placeholder}
            value={props.value} 
            onChange={props.changed}
        />
    </div>
);

export default Textarea;