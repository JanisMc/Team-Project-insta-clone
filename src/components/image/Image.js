import './Image.css'
import Aiony from '../../images/aiony.jpg'
import Alex from '../../images/alex.jpg'
import Dave from '../../images/dave.jpg'
import Edwine from '../../images/edwine.jpg'
import George from '../../images/george.jpg'
import Imansyah from '../../images/imansyah.jpg'
import Joseph from '../../images/joseph.jpg'
import Kimson from '../../images/kimson.jpg'
import Michaela from '../../images/michaela.jpg'
import Princess from '../../images/princess.jpg'
import Rachel from '../../images/rachel.jpg'
import Steve from '../../images/steve.jpg'
import Img1 from '../../images/Img1.png'
import Img2 from '../../images/Img2.png'
import Img3 from '../../images/Img3.jpg'
import Img4 from '../../images/Img4.png'
import Img5 from '../../images/Img5.png'
import Img6 from '../../images/Img6.png'
import Img7 from '../../images/Img7.jpg'
import Img8 from '../../images/Img8.png'
import Ball from '../../images/Ball.jpg'
import Blue from '../../images/Blue.jpg'
import Face from '../../images/Face.jpg'
import Kiss from '../../images/Kiss.jpg'
import Laptop from '../../images/Laptop.jpg'
import Robot1 from '../../images/Robot1.jpg'
import Robot2 from '../../images/Robot2.jpg'
import Robot3 from '../../images/Robot3.jpg'
import Sad from '../../images/Sad.jpg'
import VR from '../../images/VR.jpg'
import Like from '../../images/Heart.png'
import CommentIcon from '../../images/Comment.png'
import Share from '../../images/Share.png'
import Save from '../../images/Save.png'
import Dots from '../../images/Dots.png'

const images = {
    Aiony, 
    Alex, 
    Dave, 
    Edwine, 
    George, 
    Imansyah, 
    Joseph, 
    Kimson, 
    Michaela, 
    Princess, 
    Rachel, 
    Steve,
    Img1, 
    Img2, 
    Img3, 
    Img4, 
    Img5, 
    Img6,
    Img7,
    Img8,
    Ball, 
    Blue, 
    Face, 
    Kiss, 
    Laptop, 
    Robot1, 
    Robot2, 
    Robot3, 
    Sad, 
    VR,
    Like,
    CommentIcon,
    Share,
    Save,
    Dots

}

const Image = (props) => {
    return (
        <img src = {images[props.img]} className = {props.class}/>
    )
}

export default Image