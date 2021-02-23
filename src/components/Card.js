import React from 'react'
import User from './User'
import Logo from './Logo'
import Post from './Post'

const Cards = (props) => {
    return (
        <div className = "Card">
            <User img = {props.img} name = {props.name} />
            <Post img = {props.img2} />
        </div>
    )
}

export default Cards