import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import Title from '../../../Components/Elements/Title';
import ButtonDefault from '../../../Components/Buttons/ButtonDefault';
import InputDefault from '../../../Components/Inputs/InputDefault';
import { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter, Container, Form, Row, Col } from 'react-bootstrap';

import api from '../../../services/productApi';

function UpdateProduct({ show, handleClose, describe, categorie, pCode, price, id }) {

    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [code, setCode] = useState('');
    const [value, setValue] = useState('');

    const isValidForm = () => {
        if (!description || !category || !code || !value) {
          toast.error("Por favor, preencha todos os campos.");
          return;
        }
    
        return true;
    }

    const handleSubmit = async (e) => {

        if(isValidForm()) {
            const data = {
                "dsProduto": description,
                "dsCategoria": category,
                "cdProduto": code,
                "vlProduto": parseInt(value)
            };
            
            try {
                const response = await api.patch(`/products/${id}`, data, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
                
                if (response.status === 200) {
                    toast.success("Produto atualizado com sucesso!");
                    handleClose();
                }
            } catch (error) {
                console.log(error);
                toast.error("Ocorreu um erro. Tente novamente mais tarde.");
            }
        }
    }

    useEffect(() => {
        setDescription(describe);
        setCategory(categorie);
        setCode(pCode);
        setValue(price);
    }, [describe, categorie, pCode, price]);

    return (
        <Container>
            <Modal show={show} onHide={handleClose}>
                <ModalHeader closeButton>
                    <ModalTitle>Atualizar Produto</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    
                <Container className="py-2  d-flex flex-column align-items-start gap-3">

                    <Form>
                        <Row className="bg-white w-100 rounded-3 p-4 gap-2">
                            <Container>
                                <Title>Informações sobre o produto</Title>
                                <span className="color-gray">Favor inserir as informações relativas ao produto que deseja atualizar.</span>
                            </Container>

                            <Row>
                                <Col>
                                    <InputDefault
                                        labelTitle="Descrição"
                                        placeholder="Descrição do produto" 
                                        value={description} 
                                        onChange={(e) => setDescription(e.target.value)} 
                                    />
                                </Col>
                                <Col>
                                    <InputDefault
                                        labelTitle="Categoria" 
                                        placeholder="Categoria do produto" 
                                        value={category} 
                                        onChange={(e) => setCategory(e.target.value)} 
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <InputDefault 
                                        labelTitle="Código"
                                        placeholder="Código do produto" 
                                        type="number"
                                        value={code} 
                                        onChange={(e) => setCode(e.target.value)} 
                                    />
                                </Col>
                                <Col>
                                    <InputDefault 
                                        labelTitle="Valor"
                                        placeholder="Valor do produto" 
                                        type="number"
                                        value={value} 
                                        onChange={(e) => setValue(e.target.value)} 
                                    />
                                </Col>
                            </Row>

                        </Row>
                    </Form>

                </Container>
                </ModalBody>
                <ModalFooter>
                    <ButtonDefault
                        width={100}
                        onClick={() => handleSubmit()}
                    >
                        Atualizar Produto
                    </ButtonDefault>
                </ModalFooter>
            </Modal>
        </Container>
    );
}

export default UpdateProduct;