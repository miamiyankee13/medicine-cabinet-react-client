import React from 'react';

const Input = props => {
    let inputElement = null;
    const inputClasses = ["input-element"];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push("invalid");
    }

    switch(props.elementType) {
        case "input":
            inputElement = <input 
                                className={inputClasses.join(' ')}
                                id={props.elementConfig.name}
                                {...props.elementConfig}
                                value={props.value}
                                onChange={props.changed}
                            />;
            break;
        case "textarea":
            inputElement = <textarea className={inputClasses.join(' ')}
                                id={props.elementConfig.name}
                                {...props.elementConfig}
                                value={props.value}
                                onChange={props.changed}
                            />
            break;
        case "select":
            inputElement = (
                <select 
                    className={inputClasses.join(' ')} 
                    id={props.elementConfig.name}
                    name={props.elementConfig.name}
                    value={props.value}
                    onChange={props.changed}
                >
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.display}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input 
                                className={inputClasses.join(' ')}
                                id={props.elementConfig.name}
                                {...props.elementConfig}
                                value={props.value}
                                onChange={props.changed}
                            />;
    }

    return (
        <div className="input">
            <label className="label" htmlFor={props.elementConfig.name}>
                {props.elementConfig.label}
            </label>
            {inputElement}
        </div>
    );
}

export default Input;