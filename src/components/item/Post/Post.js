import React from 'react'
import Image from '../../image/Image'
import './Post.css'

const Post = (props) => {
    return (
        <div className = "Post">
            <Image img = {props.img} class = "feedImage"/>
        </div>
    )
}

export default Post