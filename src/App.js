import React from 'react';
import { Container, Navbar, Nav, Form, FormControl, Button, } from 'react-bootstrap';
import Home from './components/Home';
import logo from './assets/logo.png'; // تأكد من أن مسار الشعار صحيح
// import profilePicture from './assets/profile-picture.jpg'; // تأكد من أن مسار الصورة صحيح



const App = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" dir="rtl">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">الرئيسية</Nav.Link>
              <Nav.Link href="/news">الأخبار</Nav.Link>
              <Nav.Link href="/contests">المسابقات</Nav.Link>
              <Nav.Link href="/scholarships">المنح</Nav.Link>
              <Nav.Link href="/contact">تواصل معنا</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl type="search" placeholder="بحث" className="me-2" aria-label="Search" />
              <Button variant="outline-success">بحث</Button>
            </Form>
            <Button variant="primary" className="ms-2">تسجيل الدخول</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Home />
      </Container>
      <footer className="bg-light text-center text-lg-start mt-4">
        <div className="text-center p-3">
          © 2024 وقف الدكتور شوقي الفنجري. جميع الحقوق محفوظة.
        </div>
      </footer>
    </div>
  );
};

export default App;
