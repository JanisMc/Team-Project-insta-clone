import React from 'react'
import './TopSidebar.css'
import image1 from './sideimages/image1.jpg'

const TopSidebar = (props) => {
    return(
        <div id = "top-sidebar">
            <div id = "main-sidebar-image">
                 <img src = {image1} id= "sidebar-image"></img>
            </div>
            <div id = "account-user-name">
                <p id = "account-name-sidebar">{props.accountName}</p>
                <p id = "username-sidebar">{props.userName}</p>
            </div>
            <div id = "main-switch">
                <p id ="switch">Switch</p>
            </div>
        </div>
    )
}

export default TopSidebar