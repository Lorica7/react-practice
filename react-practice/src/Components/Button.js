import React from 'react';
import PropTypes from 'prop-types';
import { propTypes } from 'react-bootstrap/esm/Image';

const Button = ({ color, text, onClick }) => {
    
    
    return (
        <div>
            <button
               onClick={onClick}
                style={{ backgroundColor: color }} className="btn">{text}</button>
        </div>
    )
}



export default Button
