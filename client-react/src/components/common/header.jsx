import React, { Component } from 'react';
import '../../header.css'
class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="header">
             <ul>
            <li><a class="active" href="/">Home</a></li>
            <li><a href="/AddProject">Add</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">About</a></li>
            </ul>
            </div>
         );
    }
}
 
export default Header;