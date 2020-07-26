import React from 'react';

import CustomButton from '../custom-btn/CustomButton';

import './DialogBox.scss';

const DialogBox = ({ children }) => {
    return (
        <div className="dialog-box">
            <div className='message'>{children}</div>
            <div className="options">
                <CustomButton className='agree'>YES</CustomButton>
                <CustomButton className='back'>GO BACK</CustomButton>
            </div>
        </div>
    )
}

export default DialogBox;