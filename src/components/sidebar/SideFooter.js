import React from 'react'
import './SideFooter.css'

const SideFooter = (props) => {
    return(
        <div id = "side-footer">
            <div id = "side-footer-1">
                <p id = "first-side-footer">
                    About - Help - Press - API - Jobs - Privacy - Terms
                </p>
            </div>
            <div id = "side-footer-2">
                <p id = "second-side-footer">
                    Locations - Top Accounts - Hashtags - Language
                </p> 
            </div>
            <div id = "side-footer-3">
                <p id = "third-side-footer">
                  &copy; 2021 INSTAGRAM FROM FACEBOOK
                </p>
            </div>
        </div>
    )
}

export default SideFooter