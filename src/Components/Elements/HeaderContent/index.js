import React from 'react';
import { Container } from "react-bootstrap";
import { FaPlus } from 'react-icons/fa';
import { Route, Routes, Link, useMatch } from 'react-router-dom';

import ButtonDefault from '../../Buttons/ButtonDefault';
import ColumnSplited from '../ColumnSplited';

function HeaderContent() {
    const name = localStorage.getItem('name');
    const match = useMatch('/dashboard/products');

    return (
        <Container className="border-bottom py-4">
            <ColumnSplited>
                <Container className="w-75">
                    <h1>Olá {name || "Usuário"}!</h1>
                    <span className="color-gray">Seja bem-vindo</span>
                </Container>
                <Container className=""></Container>
                <Container className="w-100 d-flex align-items-center justify-content-end">
                    {match && (
                            <Link to="/dashboard/register-product">
                                <ButtonDefault>
                                <FaPlus className="mr-2" />
                                Novo Produto
                                </ButtonDefault>
                            </Link>
                            )}
                </Container>
            </ColumnSplited>
        </Container>
    );
    
}

export default HeaderContent;