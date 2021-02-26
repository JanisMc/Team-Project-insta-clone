import React, {useState} from 'react'
import Profile from './Profile'
import './Footer.css'
import Story from './Story'

const Footer = (props) => {
    const [profiles, setProfiles] = useState (
        [
            "Aiony", 
            "Alex", 
            "Dave", 
            "Edwine", 
            "George", 
            "Imansyah", 
            "Joseph", 
            "Kimson", 
            "Michaela", 
            "Princess", 
            "Rachel", 
            "Steve"
        ]
    )

    const [isVisible, setIsVisible] = useState (false)

    const [storyProfile, setStoryProfile] = useState ("")

    let timeoutID

    const seeStory = (displayStory) => {
        setStoryProfile(displayStory)
        setIsVisible (true)
        timeoutID = setTimeout(hideStory, 10000)
    } 

    const hideStory = () => {
        setIsVisible (false)
        clearTimeout(timeoutID)
    }

    let eachProfile = profiles.map((profile,index) => {
        return <Profile img = {profile} name = {profile} seeStory = {seeStory} key = {index}/>
    })

    return (
        <>
            {isVisible ? <Story img = {storyProfile} hideStory = {hideStory}/> : null}
            <div className = "footerContainer">
                {eachProfile}
            </div>
        </>    
    )
}

export default Footer