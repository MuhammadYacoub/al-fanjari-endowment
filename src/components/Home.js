import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import profilePicture from '../assets/profile-picture.jpg'; // تأكد من أن مسار الصورة صحيح
import filler from '../assets/filler.jpg';
import filler2 from '../assets/filler2.jpg';
import filler3 from '../assets/filler3.jpg';
import filler4 from '../assets/filler4.jpg';





const Home = () => {
  return (
    <Container className="my-5">
      <Row className="text-center">
        <Col className='section'>
          <img src={profilePicture} alt="Profile" className="rounded-circle mb-3" width="150" height="150" />
          <h1>وقف الدكتور شوقي الفنجري</h1>
          <p> لصالـــح خدمــــة الدعــــوة والفقــــه الإسلامي <br></br>نظارة المستشار رئيس قضايا الدولة</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={3}>
          <Card className="mb-4 w-100 p-0">
            <Card.Body>
            <img src={filler} alt="Profile" className="rounded-circle mb-3" width="100%" height="auto" />
            <Card.Title className='card-header bg-info text-white' > مسابقات الوقف </Card.Title>
              <Card.Text className='card-body'>وقف المرحوم المستشار الدكتور محمد شوقي الفنجري لصالح خدمة الدعوة والفقه الإسلامي برئاسة المستشار مسعد عبد المقصود الفخراني</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-4">
            <Card.Body>
            <img src={filler2} alt="Profile" className="rounded-circle mb-3" width="100%" height="auto" />
              <Card.Title className='card-header bg-info text-white'>المنح الدراسية  </Card.Title>
              <Card.Text className='card-body'>وقف المرحوم المستشار الدكتور محمد شوقي الفنجري لصالح خدمة الدعوة والفقه الإسلامي برئاسة المستشار مسعد عبد المقصود الفخراني</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-4">
            <Card.Body>
            <img src={filler3} alt="Profile" className="rounded-circle mb-3" width="100%" height="auto" />
              <Card.Title className='card-header bg-info text-white'> المكتبة </Card.Title>
              <Card.Text className='card-body'>وقف المرحوم المستشار الدكتور محمد شوقي الفنجري لصالح خدمة الدعوة والفقه الإسلامي برئاسة المستشار مسعد عبد المقصود الفخراني</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-4">
            <Card.Body>
            <img src={filler4} alt="Profile" className="rounded-circle mb-3" width="100%" height="auto" />
              <Card.Title className='card-header bg-info text-white'> نظارة الوقف </Card.Title>
              <Card.Text className='card-body'>وقف المرحوم المستشار الدكتور محمد شوقي الفنجري لصالح خدمة الدعوة والفقه الإسلامي برئاسة المستشار مسعد عبد المقصود الفخراني</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
