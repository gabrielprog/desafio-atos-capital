import React from "react";

import { Col, FormControl, FormLabel } from "react-bootstrap";

function Inputs({ labelTitle, placeholder, onChange, value, type}) {
    
    return (
        <Col>
            <FormLabel>{labelTitle}</FormLabel>
            <FormControl type={type} onChange={onChange} value={value} placeholder={placeholder} />
        </Col>
    );
}

export default Inputs;