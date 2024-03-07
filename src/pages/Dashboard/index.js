import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import SideBarMenu from '../../Components/SideBarMenu';

function Dashboard() {
  return (
    <>
      <Container
        style={{padding: 0, margin: 0, height: "100%"}}
      >
          {/* TODO: conserta o width da sidebar */}
            <Row>
                <Col xs={2} id="sidebar-wrapper" style={{ maxWidth: '200px' }}>   
                  <SideBarMenu />
                </Col>
                <Col xs={10} id="page-content-wrapper">
                    this is a test
                </Col> 
            </Row>

        </Container>
    </>
  );
}

export default Dashboard;