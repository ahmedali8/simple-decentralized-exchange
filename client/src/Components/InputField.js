import React from 'react';
import { useStore } from '../contextAPI/GlobalState';
import { onInputChangeUpdateField } from '../store/actions';

function InputField(props) {
    const [state, dispatch] = useStore();
    
    let field = props.name;
    let value = state.fields[field] ? state.fields[field] : '';
    let placeholder = props.placeholder;
    let addon = props.addon;

    const handleChange = e => {
        dispatch(onInputChangeUpdateField(field, e.target.value));
    };

    return (
        <div className="field has-addons is-12">
            <p className="control is-expanded">
                <input 
                    type="text"
                    defaultValue={props.default || value}
                    onInput={handleChange}
                    placeholder={placeholder} 
                    className="input" 
                ></input>
            </p>
            <p className="control">
                {
                    addon ?
                        <a className="button is-static">
                            {addon}
                        </a> :
                        ''
                }
            </p>
        </div>
    );
}

export default InputField;