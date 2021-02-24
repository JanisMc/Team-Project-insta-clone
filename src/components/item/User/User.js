import React from 'react'
import Logo from '../Logo/Logo'

const User = (props) => {
    return (
        <div className = "User">
            <Logo img = {props.img}/>
            <p> {props.name}</p>
        </div>
    )
}

export default User