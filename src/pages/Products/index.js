import React, { useEffect, useState } from "react";
import { Container, FormSelect } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

import ColumnSplited from "../../Components/Elements/ColumnSplited";
import InputSearch from "../../Components/Elements/InputSearch";
import { MDBTable, MDBTableHead} from "mdb-react-ui-kit";
import Pagination from "react-bootstrap/Pagination";
import Table from "../../Components/Elements/Table";
import Title from "../../Components/Elements/Title";
import api from "../../services/productApi";
import timezoneFormated from "../../infrastructure/timezone";
import { toast } from "react-toastify";

function Products() {

    const timezone = timezoneFormated();
    const [products, setProducts] = useState([]);
    const [lastUpdate, setLastUpdate] = useState(timezone);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(2);
    const [sort, setSort] = useState("");
    const [pagination, setPagination] = useState({
        first: 1,
        last: 1,
    });

    const sortOptions = [
        { label: "dsProduto", value: "Produtos"},
        { label: "dsCategoria", value: "Categoria"},
        { label: "cdProduto", value: "Codigo Produtos"},
        { label: "vlProduto", value: "Valor Produtos"},
        { label: "dtCadastro", value: "Data de cadastro"},
        { label: "qtdProduto", value: "Quantidade de Produtos"},
    ];

    const handleDelete = async (id) => {
        const response = await api.delete(`/products/${id}`);

        if (response.status === 200) {
            toast.success("Produto deletado com sucesso!");
            setProducts(products.filter(product => product.id !== id));
        }
    };

    const fetchProducts = async () => {
        const response = await api.get(`/products?q=${search}&_page=${page}&_limit=${limit}&_sort=${sort}`);

        if (response.status === 200) {
            setProducts(response.data);
            setLastUpdate(timezone);
            
            const linkHeader = response.headers?.link;
            
            if (linkHeader !== "" && linkHeader !== undefined && linkHeader !== null) {
                const pages = linkHeader.split(", ").reduce((acc, link) => {
                    const [url, rel] = link.split("; ");
                    const urlMatch = url.match(/<(.*)>/);
                    const relMatch = rel.match(/rel="(.*)"/);

                    if (urlMatch && relMatch) {
                        const params = new URLSearchParams(urlMatch[1]);
                        const page = params.get("_page");
                        if (page) {
                            acc[relMatch[1]] = page;
                        }
                    }
                    return acc;
                }, {});
      
                setPagination(pages);
            }
        }
    };

    const renderPagination = () => {

        return(
            <Pagination className="px-4">
                <Pagination.Prev onClick={() => { 
                    if(pagination.first != page) setPage(page - 1); 
                }
                } />
                <Pagination.Item>{page}</Pagination.Item>
                <Pagination.Next onClick={() => { 
                    if(pagination.last != page) setPage(page + 1); 
                }
                } />
            </Pagination>
        );

    };

    useEffect(() => {
        fetchProducts();
    }, [search, limit, page, sort]);

    return (
        <Container className="py-2">
            <ColumnSplited>

                <Container>
                    <Title>Seus Cadastros</Title>
                </Container>

                <Container className="bg-white w-25 rounded-3 d-flex align-items-center gap-1 shadow">
                    <strong>{products.length}</strong>
                    <span>Total de cadastros</span>
                </Container>

            </ColumnSplited>

            <ColumnSplited>
                <Container className="w-50 d-flex align-items-center bg-white rounded-4 py-1 px-3 gap-3">
                    <InputSearch 
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                    />
                    <FaSearch className="mr-2" />
                </Container>

                <Container></Container>

                <span className="w-100 d-flex align-items-center justify-content-end color-gray">Última atualização: {lastUpdate}</span>

            </ColumnSplited>

            <ColumnSplited>
                <Container className="w-25 d-flex align-items-center justify-content-end color-gray">
                    <FormSelect className="mt-3" onChange={(e) => setLimit(e.target.value)}>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </FormSelect>
                </Container>
                
                <Container></Container>

                <Container className="w-50 d-flex align-items-center justify-content-end color-gray">
                    <FormSelect className="mt-3" onChange={(e) => setSort(e.target.value)}>
                        <option value="">Ordenar por</option>
                        {sortOptions.map((option) => (
                            <option key={option.label} value={option.label}>{option.value}</option>
                        ))}
                    </FormSelect>
                </Container>

            </ColumnSplited>

            <Container className="mt-5 d-flex flex-column align-items-center">
                <MDBTable>
                    <MDBTableHead>
                        <tr>
                            <th scope='col'>Descrição</th>
                            <th scope='col'>Categoria</th>
                            <th scope='col'>Data Cadastro</th>
                            <th scope='col'>Cód. Produto</th>
                            <th scope='col'>Preço</th>
                            <th scope='col'>Ação</th>
                        </tr>
                    </MDBTableHead>
                
                    {products && products.map((product) => (
                        product.dsProduto &&
                    <Table 
                        key={product.id}
                        id={product.id}
                        description={product.dsProduto}
                        categorie={product.dsCategoria}
                        dateCreated={product.dtCadastro}
                        code={product.cdProduto}
                        price={product.vlProduto}
                        onDelete={() => handleDelete(product.id)}
                    />
                    ))}
                </MDBTable>
                {renderPagination()}
            </Container>

        </Container>
    );
}

export default Products;