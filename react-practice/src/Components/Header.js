import React from 'react';
import { useLocation} from 'react-router-dom'
import Button from './Button.js';



const Header = ( { title, onAdd, showAdd}) => {
 const location =useLocation()
  
    return (
        <header>
            <h1 style={headingStyle}> {title}</h1>
            {location.pathname === '/' &&
                <Button color={showAdd ? 'red' : 'green'} text={showAdd ? ' Close Section' : 'Add'} onClick={onAdd} />}
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

