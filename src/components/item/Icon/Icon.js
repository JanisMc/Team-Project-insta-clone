import React from 'react'
import Image from '../../image/Image'
import './Icon.css'

const Icon = (props) => {
    return (
        <div className = "IconContainer">
        <div className = "Icon">
           <Image img = "Like" class = "IconImg"/>
           <Image img = "CommentIcon" class = "IconImg"/>
           <Image img = "Share" class = "IconImg"/>
        </div>

        <div className = "IconRight">
            <Image img = "Save" class = "IconImg2"/>
        </div>
        </div>
    )
}

export default Icon