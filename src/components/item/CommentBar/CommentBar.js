import React, {useState} from 'react'

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
        <div>
            <h1 id = "placeholder">Comments</h1>
            <p>{post}</p>
            <input value = {currentPost} id = "input" onChange = {handlePostChange} type = "text" />
            <button id = "button" onClick = {handleButtonClick} >Post</button>
        </div>
    )
}

export default CommentBar
