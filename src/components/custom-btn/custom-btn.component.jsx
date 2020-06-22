import React from 'react';
import './custom-btn.styles.scss';

const CustomButton = ({children, ...otherProps}) => (
    <button className='custom-btn'>
        {children} 
    </button>
)

export default CustomButton;