import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import SideBarMenu from '../../Components/Elements/SideBarMenu';
import RightSideBarHeader from '../../Components/Elements/RightSideBarHeader';
import HeaderContent from '../../Components/Elements//HeaderContent';
import DashboardRoutes from '../DashboardRoutes';

function Dashboard() {
  return (
    <>
      {/* TODO: Adicionar paginação, e funcionalidade de filtro como pesquisa, quantidade de item por pagina */}
      <Container fluid>
        <Row className="p-0">
          <Col xs={2} id="sidebar-wrapper">
            <SideBarMenu />
          </Col>
          <Col xs={10} className="p-0" id="page-content-wrapper">
            <Col>
              <RightSideBarHeader />

              <HeaderContent />

              <DashboardRoutes />
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;