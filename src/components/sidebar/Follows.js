import React from 'react'
import './Follows.css'
import me from './sideimages/me.jpg'
import john from './sideimages/john.jpg'
import neil from './sideimages/neil.jpg'
import peter from './sideimages/peter.jpg'
import aurora from './sideimages/aurora.jpg'

const sideimages = {
    me : me,
    john : john,
    neil : neil,
    peter : peter,
    aurora : aurora
}


const Follows = (props) => {
    return(
        <div id = "follows">
            <div>
                <img src = {sideimages[props.src]} id = "follows-image"></img>
            </div>
            <div id = "follow-center">
                <p id = "follow-username">{props.name}</p>
                <p id = "follow-info">Followed by usernamehere +6 more</p>
            </div>
            <div>
                <p id = "follow-button">Follow</p>
            </div>
        </div>
    )
}

export default Follows 