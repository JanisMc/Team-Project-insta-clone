import Image from '../image/Image'
import './Profile.css'

const Profile = (props) => {
    return (
        <div className = "profileDiv">
            <Image img = {props.img} class = "profilePics"/>
            <p className = "profileName">{props.name}</p>
        </div>
    )
}

export default Profile