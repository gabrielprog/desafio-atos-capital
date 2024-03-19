import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ButtonDefault from "../../Components/Buttons/ButtonDefault";
import Form from "../../Components/Elements/Form";
import InputDefault from "../../Components/Inputs/InputDefault";
import art from "../../assets/images/art.svg";
import api from "../../services/coreApi";
import isAuthenticated from "../../services/isAuthenticated";

function Signin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const isValidForm = () => {
        if (!email || !password) {
            toast.error("Por favor, preencha todos os campos.");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            toast.error("Por favor, insira um email válido.");
            return;
        }

        return true;
    };

    const handleSubmit = async () => {

        if(isValidForm()) {
            const data = {
                email,
                password
            };
      
            try {
                const response = await api.post("/auth/login", data);
        
                if (response.status === 200) {
                    localStorage.setItem("token", response.data.access_token);
                    toast.success("Login realizado com sucesso!");
                    navigate("/dashboard/products/");
                }

            } catch (error) {
                console.log(error);

                if (error?.response.status === 401) {
                    toast.error("E-mail ou senha inválidos. Tente novamente.");
                    return;
                }
                toast.error("Ocorreu um erro ao tentar fazer login. Tente novamente mais tarde.");
            }
        }
    };

    useEffect(() => {
        async function checkLogin() {
            const isLogged = await isAuthenticated();
      
            if (isLogged) {
                navigate("/dashboard/products");
            }
        }
        checkLogin();
    }, []);

    return (
        <>
            <Container className="h-100 vh-100 d-flex justify-content-center align-items-center" fluid>
                <Row className="p-0">
                    <Col xs={6} className='d-flex justify-content-center align-items-center' id="sidebar-wrapper">   
                        <Form
                            title='Olá! 👋'
                            subtitle='Acesse sua conta para começar a gerenciar seus produtos.'
                        >
                            <InputDefault
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                type={"email"}
                                labelTitle="E-mail"
                                placeholder="Digite seu e-mail"
                            />

                            <InputDefault
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                type={"password"}
                                labelTitle="Senha"
                                placeholder="Digite sua senha"
                            />

                            <ButtonDefault
                                width={100}
                                onClick={() => handleSubmit()}
                            >Login</ButtonDefault>
                  
                            <Container className="w-100 my-3 d-flex align-items-center">
                                <hr className="flex-grow-1" />
                                <span className="mx-2">ou</span>
                                <hr className="flex-grow-1" />
                            </Container>

                            <span className="text-center">Ainda não tem uma conta? <Link to="/signup">Cadastre-se</Link></span>
                        </Form>
                    </Col>
                    <Col xs={6} className="p-0 h-100 d-flex justify-content-center align-items-center" id="page-content-wrapper">
                        <Container className='w-100 h-100'>
                            <img src={art} alt="art" style={{width: "100%"}} />
                        </Container>
                    </Col> 
                </Row>
            </Container>
        </>
    );
}

export default Signin;