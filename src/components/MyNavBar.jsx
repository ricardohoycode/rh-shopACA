import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/navBar.css'
import Logo from '../assets/logoStore.png'

import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux'
import SideBarCar from './SideBarCard'

//img
import bnrImg1 from "../assets/img1.jpg";

const MyNavBar = () => {
  //const navigate = useNavigate()

  /*const logeOut = () => {
    localStorage.setItem('token', '')
    navigate('/login')
    setEmoji(true)
  }*/

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // const user = useSelector(state => state.newProduct)


  return (
    <div>
      <Navbar className='bg-navBar p-fixed' bg={bnrImg1} expand='lg' >
        <Container className='p-fixed'>
          <Navbar.Brand to='/' as={Link}>
            <h1><i class="fas fa-shopping-basket"></i> Ecommerce RH</h1>
            {/* <img src={Logo} alt='logo of e-commerce' width={'140px'} /> */}
          </Navbar.Brand>
          <div className='btnShop'>
            <Nav.Link as={Link} to='/login'>
              <button title='Log out' type='button' className='btn btn-light position-relative'><i className='fa-solid fa-user'></i></button>
            </Nav.Link>
            <Nav.Link onClick={handleShow}>
              <button type='button' className='btnShopping'><i className='fa-solid fa-cart-shopping m-2'></i> | <i className='fa-solid fa-angle-down m-2'></i></button>
            </Nav.Link>
          </div>
        </Container>
      </Navbar>
      <Navbar className='bg-navBar' bg='light' expand='lg'>
        <Container>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto linkNav'>
              <Navbar.Brand className='linkNav nav1' to='/' as={Link}>Home</Navbar.Brand>
              <Nav.Link className='linkNav' as={Link} to='/about'>About Us</Nav.Link>
              <Nav.Link className='linkNav' as={Link} to='/purchases'>Purchases</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <SideBarCar show={show} handleClose={handleClose} />
    </div>
  )
}

export default MyNavBar