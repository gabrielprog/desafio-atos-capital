import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ColumnSplited from '../../Components/Elements/ColumnSplited';
import Title from '../../Components/Elements/Title';
import ButtonDefault from '../../Components/Buttons/ButtonDefault';
import InputDefault from '../../Components/Inputs/InputDefault';
import { toast } from 'react-toastify';
import { Form, Container, Row, Col } from 'react-bootstrap';
import api from '../../services/productApi';

function RegisterProduct() {

    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [code, setCode] = useState('');
    const [value, setValue] = useState('');
    const [quantity, setQuantity] = useState('');
    const navigate = useNavigate();

    const isValidForm = () => {
        if (!description || !category || !code || !value || !quantity) {
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
                "vlProduto": parseFloat(value),
                "dtCadastro": new Date(), 
                "qtdProduto": parseInt(quantity)
            };
            
            try {
                const response = await api.post('/products', data, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
                
                if (response.status === 201) {
                    toast.success("Produto cadastrado com sucesso!");
                    navigate('/dashboard/products/');
                }
            } catch (error) {
                console.log(error);
                toast.error("Ocorreu um erro. Tente novamente mais tarde.");
            }
        }
    }

    return (
        <Container className="py-2 d-flex flex-column align-items-start gap-3">
        
        <ColumnSplited>
            <Title>Cadastrar Produto</Title>
        </ColumnSplited>

        <Form>
            <Row className="bg-white w-75 rounded-3 p-4 gap-2">
                <Container>
                    <Title>Informações sobre o produto</Title>
                    <span className="color-gray">Favor inserir as informações relativas ao produto que deseja cadastrar.</span>
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
                <Row>
                    <Col>
                        <InputDefault 
                            labelTitle="Quantidade"
                            placeholder="Quantidade do produto"
                            type="number"
                            value={quantity} 
                            onChange={(e) => setQuantity(e.target.value)} 
                        />
                    </Col>
                </Row>
            </Row>
        </Form>

        <Row className="justify-content-center mt-2 gap-3 bg-white w-75 rounded-3 p-4">
                <Container>
                    <Title>Confirmação</Title>
                    <span className="color-gray">Confira os dados informados antes de cadastrar o produto</span>
                </Container>

                <ButtonDefault
                    width={100}
                    onClick={() => handleSubmit()}
                >
                    Cadastrar Produto
                </ButtonDefault>
        </Row>


        </Container>
    );
}

export default RegisterProduct;