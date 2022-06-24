import React, { Component } from "react";
 import {Nav, Navbar} from 'react-bootstrap';
 import '../screens/stylebar.css';
 import '../screens/orderstyle.css';

class Headbar extends Component{
    
    render()
    {
        return(
            <div className="topnav">
        <Navbar
          fixed="top"
          expand="lg"
          bg="dark"
          variant="dark"
          className="topnav"
        >
          <h2>Companian Admin</h2>
        </Navbar>
      </div>
        );
    }
}

export default Headbar;