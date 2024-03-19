import React from "react";

import logo from "../../../assets/images/logo.svg";
import { Col, Container } from "react-bootstrap";

function Form({children, title, subtitle}) {
    return (
        <Container className="d-flex flex-column gap-5 p-5">
            
            <Col>
                <h5>{title}</h5>
                <span>{subtitle}</span>
            </Col>
    
            <Col className="d-flex flex-column gap-3 w-100">
                {children}
            </Col>
    
            <Col className="d-flex justify-content-center align-items-center w-100">
                <img src={logo} alt="logo" style={{width: "50%"}} />
            </Col>
            
        </Container>
    );
}

export default Form;