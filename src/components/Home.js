import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import profilePicture from '../assets/profile-picture.jpg'; // تأكد من أن مسار الصورة صحيح

const Home = () => {
  return (
    <Container className="my-5">
      <Row className="text-center">
        <Col>
          <img src={profilePicture} alt="Profile" className="rounded-circle mb-3" width="150" height="150" />
          <h1>وقف الدكتور شوقي الفنجري</h1>
          <p>وقف المرحوم المستشار الدكتور محمد شوقي الفنجري لصالح خدمة الدعوة والفقه الإسلامي برئاسة المستشار مسعد عبد المقصود الفنجري</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={3}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>وقف المرحوم المستشار</Card.Title>
              <Card.Text>وقف المرحوم المستشار الدكتور محمد شوقي الفنجري لصالح خدمة الدعوة والفقه الإسلامي برئاسة المستشار مسعد عبد المقصود الفنجري</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>وقف المرحوم المستشار</Card.Title>
              <Card.Text>وقف المرحوم المستشار الدكتور محمد شوقي الفنجري لصالح خدمة الدعوة والفقه الإسلامي برئاسة المستشار مسعد عبد المقصود الفنجري</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>وقف المرحوم المستشار</Card.Title>
              <Card.Text>وقف المرحوم المستشار الدكتور محمد شوقي الفنجري لصالح خدمة الدعوة والفقه الإسلامي برئاسة المستشار مسعد عبد المقصود الفنجري</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>وقف المرحوم المستشار</Card.Title>
              <Card.Text>وقف المرحوم المستشار الدكتور محمد شوقي الفنجري لصالح خدمة الدعوة والفقه الإسلامي برئاسة المستشار مسعد عبد المقصود الفنجري</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
