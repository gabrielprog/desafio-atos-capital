import React from 'react';
import { Container } from "react-bootstrap";

import InputSearch from '../../Elements/InputSearch';
import { FaSearch, FaQuestionCircle } from 'react-icons/fa';
import Notification from '../../Elements/Notification';
import avatar from '../../../assets/images/avatar.png';

function RightSideBarHeader() {
    const name = localStorage.getItem('name');

    return (

        <Container 
            fluid
            className="bg-white border-bottom p-4 w-100 d-flex space-between"
        >   
            <Container
                className="bg-light rounded-4 py-1 px-2 d-flex align-items-center gap-2 w-50"
            > 
                <FaSearch className="mr-2" />
                <InputSearch 
                    disbabled={true}
                />
            </Container>

            <Container></Container>

            <Container
                className="d-flex align-items-center w-50 gap-3 justify-content-end"
            > 
                <FaQuestionCircle className="color-gray" size={24} />

                <Notification />

                <Container
                    className="d-flex align-items-center gap-1"
                >
                <img src={avatar} alt="Avatar" className="rounded-circle" width="40" height="40" />

                <span>{name || "Usuário"}</span>
            </Container>

            </Container>

            
        </Container>
    );
}

export default RightSideBarHeader;