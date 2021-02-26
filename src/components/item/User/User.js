import React from 'react'
import Logo from '../Logo/Logo'
import './User.css'
import Image from '../../image/Image'

const User = (props) => {
    return (
        <div className = "UserContainer">
        <div className = "User">
            <Logo img = {props.img} />
            <p> {props.name} </p>
            <Image img="Dots" class = "Dots"/>
        </div>
        </div>
    )
}

export default User