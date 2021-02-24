import React from 'react'
import Image from '../../image/Image'

const Post = (props) => {
    return (
        <div>
            {/* <img src = {Photo[props.img2]}  alt = "Image" />  */}
            <Image img = "Img2" class = "feedImage"/>
        </div>
    )
}

export default Post