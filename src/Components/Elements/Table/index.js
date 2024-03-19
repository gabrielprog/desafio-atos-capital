import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { MDBTableBody } from "mdb-react-ui-kit";

import ButtonDelete from "../../Buttons/ButtonDelete";
import ButtonEdit from "../../Buttons/ButtonEdit";
import UpdateProduct from "../../Modals/UpdateProduct";

import formatNumberToRealEnglish from "../../../infrastructure/priceFormat";
import { formatTimestamp } from "../../../infrastructure/timezone";

function Table({description, categorie, dateCreated, code, price, onDelete, id}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <MDBTableBody>
                <tr>
                    <th>{description}</th>
                    <td>{categorie}</td>
                    <td>{formatTimestamp(dateCreated)}</td>
                    <th>{code}</th>
                    <td>{formatNumberToRealEnglish(price)}</td>
                    <td>
                        <Row>
                            <Col xs="auto">
                                <ButtonEdit onClick={() => handleShow()} className="me-2" />
                            </Col>
                            <Col xs="auto">
                                <ButtonDelete onClick={() => onDelete(id)} />
                            </Col>
                        </Row>
                    </td>
                </tr>
            </MDBTableBody>
      
            <UpdateProduct 
                id={id}
                describe={description}
                categorie={categorie}
                dateCreated={dateCreated}
                pCode={code}
                price={price}  
                show={show} 
                handleClose={handleClose} 
            />

        </>
    );
}

export default Table;