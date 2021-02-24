import React from 'react'
import Profile from './Profile'
import './Footer.css'

const profiles = [
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

const Footer = (props) => {
    let eachProfile = profiles.map((profile,index) => {
        return <Profile img = {profile} name = {profile} key = {index}/>
    })
    return (
        <div className = "footerContainer">
            {eachProfile}
        </div>
    )
}

export default Footer
