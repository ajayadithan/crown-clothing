import React from 'react';
import './custom-button.styles.scss';

const Button = ({ children, ...otherButtonProps }) => (
    <button className='custom-button' {...otherButtonProps}>
        {children}
    </button>
)

export default Button