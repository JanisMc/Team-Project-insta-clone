import React from 'react'
import Img1 from '../../../images/Img1.png'
import Img2 from '../../../images/Img2.png'
import Img3 from '../../../images/Img3.jpg'
import Img4 from '../../../images/Img4.png'
import Img5 from '../../../images/Img5.png'
import Img6 from '../../../images/Img6.png'
import Img7 from '../../../images/Img7.jpg'
import Img8 from '../../../images/Img8.png'

const Photo = {
    Img1, 
    Img2, 
    Img3, 
    Img4, 
    Img5, 
    Img6,
    Img7,
    Img8
}
    
const Logo = (props) => {
    return (
        <div className = "Logo">
            <img src = {Photo[props.img]}  alt = "Image" />  
        </div>
    )
}

export default Logo