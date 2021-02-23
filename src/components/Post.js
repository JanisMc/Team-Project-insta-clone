import React from 'react'
import Ball from '../images/Ball.jpg'
import Blue from '../images/Blue.jpg'
import Face from '../images/Face.jpg'
import Kiss from '../images/Kiss.jpg'
import Laptop from '../images/Laptop.jpg'
import Robot1 from '../images/Robot1.jpg'
import Robot2 from '../images/Robot2.jpg'
import Robot3 from '../images/Robot3.jpg'
import Sad from '../images/Sad.jpg'
import VR from '../images/Sad.jpg'

const Photo = {
    Ball, 
    Blue, 
    Face, 
    Kiss, 
    Laptop, 
    Robot1, 
    Robot2, 
    Robot3, 
    Sad, 
    VR 
}

const Post = (props) => {
    return (
        <div>
            <img src = {Photo[props.img2]}  alt = "Image" /> 
        </div>
    )
}

export default Post