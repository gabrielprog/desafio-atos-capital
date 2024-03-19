import React from "react";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import Logo from "../../../assets/images/logo.svg";

function SideBarMenu() {
    return (
        <Nav className="col-md-2 bg-white border-right p-5 d-flex flex-column align-items-center position-fixed vh-100">
            <div className="sidebar-sticky">
                <img src={Logo} alt="Logo" className="logo" />
            </div>

            <NavItem className="bg-light rounded-3 mt-4 p-2 w-100 text-center">
                <Link to="/dashboard/products" className="d-flex p-2 flex-row align-items-center gap-3 color-black no-hover">
                    <FaShoppingBag className="color-red" />
              Produtos
                </Link>
            </NavItem>
        </Nav>
    );
}

export default SideBarMenu;