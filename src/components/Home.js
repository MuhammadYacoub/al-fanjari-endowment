import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="p-5 my-5 bg-light rounded" style={{ textAlign: 'right' }}>
      <Row>
        <Col>
          <h1>مرحبًا بكم في وقف الدكتور محمد شوقي الفنجري</h1>
          <p>نحن ملتزمون بدعم الأبحاث والدعوة الإسلامية من خلال الجوائز والمنح الدراسية.</p>
          <p>
            <Button variant="primary">تعرف على المزيد</Button>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
