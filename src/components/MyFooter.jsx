import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, useNavigate } from 'react-router-dom'

const MyFooter = () => {
    return (
        <footer id='footer' className='footer-1'>
            <div className='main-footer widgets-dark typo-light'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xs-12 col-sm-6 col-md-3'>
                            <div className='widget subscribe no-box'>
                                <h5 className='widget-title'>Shoppad Store<span></span></h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsa nam incidunt aliquam optio.</p>
                            </div>
                        </div>

                        <div className='col-xs-12 col-sm-6 col-md-3'>
                            <div className='widget no-box'>
                                <h5 className='widget-title'>Information<span></span></h5>
                                <ul className='thumbnail-widget'>
                                    <Navbar.Brand className='linkNav nav1' to='/' as={Link}>Home</Navbar.Brand>
                                    <Nav.Link className='linkNav' as={Link} to='/about'>About Us</Nav.Link>
                                    <Nav.Link className='linkNav' as={Link} to='/purchases'>Purchases</Nav.Link>
                                </ul>
                            </div>
                        </div>

                        <div className='col-xs-12 col-sm-6 col-md-3'>
                            <div className='widget no-box'>
                                <h5 className='widget-title'>Get Started<span></span></h5>
                                <p>Get access to your full Training and Marketing Suite.</p>
                                <ul className='thumbnail-widget'>
                                    <li> <div className='thumb-content'><a href='/login'>Log In</a></div> </li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-xs-12 col-sm-6 col-md-3'>
                            <div className='widget no-box'>
                                <h5 className='widget-title'>Contact Us<span></span></h5>
                                <p> <b>Head Office:</b> Iquitos, Belén, Perú, 16602</p>
                                <p> <b>Telephone: </b> +51 925 417 209</p>
                                <p><a href='#' title='emailShoppad'>rimaylu@gmail.com</a></p>
                                <ul className='social-footer2'>
                                    <li className=''><a title='Youtube' target='_blank' href='#'><i className='fa-brands fa-youtube'></i></a></li>
                                    <li className=''><a href="https://web.facebook.com/Ricardohoyoscode" class="facebook" target="_blank"><i
                                        class="fab fa-facebook-f"></i></a></li>
                                    <li className=''><a href="https://twitter.com/ricardohoycode" class="twitter" target="_blank"><i
                                        class="fab fa-twitter"></i></a></li>
                                    <li className=''><a title='Instagram' target='_blank' href='#'><i className='fa-brands fa-instagram'></i></a></li>
                                    <li className=''><a href="https://www.linkedin.com/in/ricardo-mart%C3%ADn-hoyos-249b24206/" class="linkendin"
                                        target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <center>
                    <img src="/src/assets/payment.png" alt="" />
                </center>
            </div>

            <div className='footer-copyright'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <p>&copy; Diseñado con <i class="fas fa-heartbeat"></i> por Ricardo
                                Hoyos -<span> RH Desarrollo Web</span> | Todos los derechos reservados!</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default MyFooter