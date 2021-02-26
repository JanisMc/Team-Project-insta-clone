import React from 'react'
import Image from '../../image/Image'
    
const Logo = (props) => {
    return (
        <div className = "Logo">
            <Image img = {props.img} class = "UserLogo"/>  
        </div>
    )
}

export default Logo