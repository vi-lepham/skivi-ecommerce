import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className='form-input'>
        <input className='input-field' {...otherProps} onChange={handleChange} />
        {label ? (
            <label className={`${
                otherProps.value.length ? 'shrink' : ''
              } input-label`}
            >
                {label}
            </label>
            ) : null}
    </div>
)

export default FormInput;