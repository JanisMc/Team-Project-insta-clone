import React, {useState} from 'react'
import './CommentBar.css'

const CommentBar = () => {
    const [currentPost,setCurrentPost] = useState ("")
    const [post,setPost] = useState ("")

    const handlePostChange = (event) =>{
        setCurrentPost (event.target.value) 
    }

    const handleButtonClick = () =>{
        setPost (currentPost)
    }

    return (
        <div className =  "CommentBar">
            <h1 id = "placeholder"/>
            <p>{post}</p>
            <input value = {currentPost} id = "input" onChange = {handlePostChange} type = "text"/>
            <button id = "button" onClick = {handleButtonClick} >Post</button>
        </div>
    )
}

export default CommentBar
