import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";

import { toast } from 'react-toastify';
import Form from '../../Components/Elements/Form';
import InputDefault from '../../Components/Inputs/InputDefault';
import ButtonDefault from '../../Components/Buttons/ButtonDefault';
import art from '../../assets/images/art.svg';
import { useNavigate } from 'react-router-dom';
import api from '../../services/coreApi';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const isValidForm = () => {
    if (!email || !password || !name || !confirmPassword) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Por favor, insira um email válido.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("As senhas não são iguais.");
      return;
    }

    return true;
  }

  const handleSubmit = async (e) => {

    if(isValidForm()) {
      const data = {
        email,
        password
      };
      
      try {
        const response = await api.post('/auth/register', data);
        
        if (response.status === 200) {
          localStorage.setItem('token', response.data.access_token);
          localStorage.setItem('name', name);
          toast.success("Cadastro realizado com sucesso!");
          navigate('/signin');
        }

        if (response.status === 401) {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Ocorreu um erro. Tente novamente mais tarde.");
      }
    }
  }

  return (
    <>
      <Container className="h-100 vh-100 d-flex justify-content-center align-items-center" fluid>
            <Row className="p-0">
                <Col xs={6} className='d-flex justify-content-center align-items-center' id="sidebar-wrapper">   
                  <Form
                    title='Cadastrar-se'
                    subtitle='Preencha os campos para concluir seu cadastro'
                  >
                    <InputDefault
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      labelTitle="Nome"
                      placeholder="Informe seu nome..."
                    />

                    <InputDefault
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      labelTitle="E-mail"
                      placeholder="seuemail@exemplo.com"
                    />

                    <InputDefault
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      type="password"
                      labelTitle="Senha"
                      placeholder="Digite sua senha..."
                    />

                    <InputDefault
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      value={confirmPassword}
                      type="password"
                      labelTitle="Confirme sua senha"
                      placeholder="Digite sua senha novamente..."
                    />

                    <ButtonDefault
                      width={100}
                      onClick={() => handleSubmit()}
                    >Cadastrar</ButtonDefault>

                  </Form>
                </Col>
                <Col xs={6} className="p-0 h-100 d-flex justify-content-center align-items-center" id="page-content-wrapper">
                    <Container className='w-100 h-100'>
                      <img src={art} alt="art" style={{width: '100%'}} />
                    </Container>
                </Col> 
            </Row>
        </Container>
    </>
  );
}

export default Signup;