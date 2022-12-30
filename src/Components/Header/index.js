import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import TopCateHeaderComponents from '../TopCateHeader'
import Badge from 'react-bootstrap/Badge';
import { getAllCarts, getCartTotal} from '../../Store/cartSlice';
import { useSelector, useDispatch } from 'react-redux';


import {getUserDetails } from '../../Store/userSlice';

const HeaderComponents = ()=>{
  const carts = useSelector(getAllCarts);
  const dispatch = useDispatch();
  
  
  
  const userDetails = useSelector(getUserDetails);
  console.log('header login details', userDetails)

  useEffect(()=>{
    dispatch(getCartTotal())
    // eslint-disable-next-line
  },[carts])
    return (
       <>
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>My ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav>
                <Link className="nav-link" to="/">
                    Home
                </Link>
              </Nav>  
            <Nav>
                <Link className="nav-link" to="/about">
                    About
                </Link>
            </Nav>
          </Nav>
          <Nav>
            <Nav>
                <Link className="nav-link" to="/cart">
                    Cart
                    {
                      carts && carts.length && carts.length > 0 ? <Badge bg="info">{carts.length}</Badge> : ''
                    }
                    
                </Link>
            </Nav>
            <Nav>
                <Link className="nav-link" to="/contact">
                    Contact
                </Link>
            </Nav>
            <Nav>
              {
                userDetails && userDetails.id && userDetails.id !== '' ? <Link className="nav-link" to="/user">{userDetails.firstName}</Link> : <Link className="nav-link" to="/login">Login</Link>
              }
                
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <TopCateHeaderComponents />
       </>
    )
}

export default HeaderComponents;