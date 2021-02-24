import React from 'react'
import Suggestions from './Suggestions'
import Follows from './Follows'
import SideFooter from './SideFooter'
import TopSidebar from './TopSidebar'
import './Sidebar.css'

const Sidebar = (props) => {
    return(
       <div> 
            <TopSidebar accountName = "Carlos Puyol" userName = "SpanishCarlosBarcelona"/>
            <Suggestions/>
            <Follows src = "me" name = "Nathan Robinson"/>
            <Follows src = "john" name = "John Fenlon"/> 
            <Follows src = "neil" name = "Neil Munro"/>
            <Follows src = "peter" name = "Peter Piper"/>
            <Follows src = "aurora" name = "Aurora Casella"/>
            <SideFooter/>
        </div>
    )
}

export default Sidebar