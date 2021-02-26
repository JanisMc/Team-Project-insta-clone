import Image from '../image/Image'
import './Story.css'

const Story = (props) => {
    return (
        <div className = "storyOverlay">
                <Image img = {props.img} class = "storyPics"/>
                <p className = "storyName">{props.img}</p>
                <button className = "close" onClick = {() => {props.hideStory()}}>X</button>
        </div>
    )
}

export default Story