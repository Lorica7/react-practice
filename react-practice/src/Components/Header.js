import React from 'react';
import Button from './Button.js'


const Header = ( { title, onAdd, showAdd}) => {

  
    return (
        <header>
            <h1 style={headingStyle}> {title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? ' Close' : 'Add'} onClick={onAdd}/>
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

