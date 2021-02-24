import React from 'react'
import User from '../User/User'
import Post from '../Post/Post'
import Icon from '../Icon/Icon'
import CommentBar from '../CommentBar/CommentBar'

const Cards = (props) => {
    return (
        <div className = "Card">
            <User img = {props.img} name = {props.name} />
            <Post img = {props.img2} />
            <Icon img = {props.img3} img = {props.img4} img = {props.img5} img = {props.img6}/>
            <CommentBar/>
        </div>
    )
}

export default Cards