import React, { Component } from 'react'



//Stateless functional component.
const NavBar = props => {
    console.log("Navbar-Rendered");
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar
           Navbar{" "} 
           <span className="badge badge-pill badge-secondary">
            {props.totalCounters}
            </span>
            </a>
          </nav>
     );
}
 
export default NavBar;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class NavBar extends Component {
     
    render() { 
        return (
            <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar
           Navbar{" "} 
           <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
            </a>
          </nav>
        );
    }
}
 
export default NavBar;
