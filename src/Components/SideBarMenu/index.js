import React from 'react';
import {Nav} from "react-bootstrap";
import Logo from '../../assets/images/logo.svg';

import '../../assets/css/sidebar.css';

function SideBarMenu() {
  return (
    <Nav 
        className="col-md-12 d-none d-md-block bg-white sidebar"
        fill
    >
        <div className="sidebar-sticky">
            <img src={Logo} alt="Logo" className="logo" />
        </div>
        <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
    </Nav>
  );
}

export default SideBarMenu;