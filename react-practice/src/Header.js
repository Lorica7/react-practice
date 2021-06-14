import React from 'react';
import Button from './Button.js'


const Header = (props) => {
    return (
        <header>
            <h1 style={headingStyle}> {props.title}</h1>
           <Button color='green' text='Add'/>
        </header>
    )
}

const headingStyle = {
    fontWeight: "bold",
}

Header.defaultProps = {
    title: "Task Tracker"
}



export default Header

