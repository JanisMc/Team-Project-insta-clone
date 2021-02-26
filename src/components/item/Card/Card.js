import React from 'react'
import User from '../User/User'
import Post from '../Post/Post'
import Icon from '../Icon/Icon'
import CommentBar from '../CommentBar/CommentBar'
import './Card.css'

const Card = (props) => {
    return (
        <div className = "Card">
            <User img = {props.imgProfile} name = {props.name} />
            <Post img = {props.imgPost} />
            <Icon/>
            <CommentBar/>
        </div>
    )
}

export default Card