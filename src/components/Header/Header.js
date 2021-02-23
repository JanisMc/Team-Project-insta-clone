
import {Component} from "react";

import "../Header/Header.css";

class Header extends Component {
    render(){
        return (
           <nav className="Nav">
             <div className="Nav-menus">
               <div className="Nav-brand">
               <h2>Instagram</h2>
                 <a className="Nav-brand-logo" href="logo.png">
                   
                 </a>
               </div>
             </div>
           </nav>
       );
    }   
}
export default Header
