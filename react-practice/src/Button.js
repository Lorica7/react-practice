import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ color, text, onClick }) => {
    
    const onClick = () => {
        console
    }
    
    return (
        <div>
            <button
                onClick={onClick}
                style={{ backgroundColor: color }} className="btn">{text}</button>
        </div>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}
Button.propTypes = {
    text: PropTypes.strting,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
