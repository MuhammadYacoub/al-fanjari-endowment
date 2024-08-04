import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Home from './components/Home';
import About from './components/About';
import Awards from './components/Awards';
import Scholarships from './components/Scholarships';
import News from './components/News';
import Contact from './components/Contact';
import logo from './assets/images/icon.webp'; // تأكد من أن مسار الشعار صحيح

const App = () => {
  return (
    <Router>
      <Navbar bg="light" expand="lg" dir="rtl">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/"> الرئيسية</Nav.Link>
              <Nav.Link href="/about">من نحن</Nav.Link>
              <Nav.Link href="/awards">الجوائز والمسابقات</Nav.Link>
              <Nav.Link href="/scholarships">المنح الدراسية</Nav.Link>
              <Nav.Link href="/news">الأخبار</Nav.Link>
              <Nav.Link href="/contact">اتصل بنا</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl type="search" placeholder="بحث" className="me-2" aria-label="Search" />
              <Button variant="outline-success">بحث</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
      <footer style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>&copy; 2024 وقف الدكتور محمد شوقي الفنجري. جميع الحقوق محفوظة.</p>
      </footer>
    </Router>
  );
};

export default App;
