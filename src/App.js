import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import { FaFacebook, FaPinterest, FaInstagram } from 'react-icons/fa';

import Home from './pages/Home';
import Products from './pages/Products'; 
import Apropos from './pages/Apropos';
import { ProductProvider } from './pages/ProductContext';

const App = () => {
  return (
    <Router>
      <ProductProvider> 
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">
              Les Trésors de la Terre Cuite
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/products">
                  Products
                </Nav.Link>
                <Nav.Link as={Link} to="/apropos">
                  À propos
                </Nav.Link>
              </Nav>
              <Nav className="ms-auto">
                <Nav.Link href="#">
                  <FaSearch />
                </Nav.Link>
                <Nav.Link href="#">
                  <FaUser />
                </Nav.Link>
                <Nav.Link href="#">
                  <FaShoppingCart />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className="mt-4 bg-beige"> {/* Adicionado a classe bg-beige para alterar a cor de fundo */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} /> {/* Adicionado */}
            <Route path="/apropos" element={<Apropos />} />
          </Routes>
        </Container>

        <Container className="mt-4">
          <div className="text-center">
            <h3>Suivez-nous</h3>
            <div>
              <a href="https://www.facebook.com/"><FaFacebook /></a>
              <a href="https://www.pinterest.com/"><FaPinterest /></a>
              <a href="https://www.instagram.com/"><FaInstagram /></a>
            </div>
          </div>
        </Container>
      </ProductProvider> 
    </Router>
  );
};

export default App;
