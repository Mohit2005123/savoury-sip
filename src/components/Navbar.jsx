import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaSignInAlt, FaUserPlus, FaShoppingCart } from 'react-icons/fa';
import Badge from 'react-bootstrap/Badge';
import Modal from '../Modal';
import Cart from '../Screens/Cart';
import { useCart } from './ContextReducer';

function MyNavbar() {
  let data= useCart();
  const [cartView, setCartView] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  const cartItemCount = 5; // Example value for cart item count

  // Function to close the modal
  const handleCloseModal = () => {
    setCartView(false);
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          SAVORY-SIP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to='/aboutOwner'>
            About Us
            </Nav.Link>
          </Nav>
          <Nav className="me-auto">
            {localStorage.getItem('authToken') ? (
              <Nav.Link as={Link} to="/myOrder">
                {' '}
                My Orders
              </Nav.Link>
            ) : (
              ''
            )}
          </Nav>

          {!localStorage.getItem('authToken') ? (
            <Nav>
              <Nav.Link as={Link} to="/login" className="d-flex align-items-center text-dark">
                <FaSignInAlt className="me-2" style={{ color: '#343a40' }} /> Login
              </Nav.Link>
              <div className="vr mx-2" style={{ height: '2rem', borderColor: 'black !important' }}></div>
              <Nav.Link as={Link} to="/createuser" className="d-flex align-items-center text-dark">
                <FaUserPlus className="me-2" style={{ color: '#343a40' }} /> Sign Up
              </Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link className="d-flex align-items-center text-dark" onClick={handleLogout}>
                <FaSignInAlt className="me-2" style={{ color: '#343a40' }} /> Logout
              </Nav.Link>
              <div className="vr mx-2" style={{ height: '2rem', borderColor: 'black !important' }}></div>
              <Nav.Link
                as={Link}
                to="/"
                className="d-flex align-items-center text-dark"
                onClick={() => {
                  setCartView(true);
                }}
              >
                <FaShoppingCart className="me-2" style={{ color: '#343a40' }} /> Cart
                {data.length > 0 && (
                  <Badge bg="danger" className="ms-2">
                    {data.length}
                  </Badge>
                )}
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
        <hr className="my-4" />
      </Container>
      {cartView && <Modal onClose={handleCloseModal}><Cart /></Modal>}
    </Navbar>
  );
}

export default MyNavbar;
