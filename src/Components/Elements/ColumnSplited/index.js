import React from "react";
import { Col } from "react-bootstrap";

function ColumnSplited({children}) {
    return (
        <Col className="mt-5 w-100 d-flex flex-row space-between">
            {children}
        </Col>
    );
}

export default ColumnSplited;