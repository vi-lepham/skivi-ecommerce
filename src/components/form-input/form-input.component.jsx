import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className='form-input'>
        <input className='input-field' {...otherProps} />
        {label ? 
            (<label className={
                `${otherProps.value.length > 0 ? 
                    'shrink' : 'input-label'}`
            }>{label}</label>)
            : null
        }
    </div>
)

export default FormInput;