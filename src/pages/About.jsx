import axios from 'axios'
import { Button, Form, InputGroup } from "react-bootstrap"
import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Accordion from 'react-bootstrap/Accordion'
import Container from 'react-bootstrap/Container'

// Import Images
// import bnrImg1 from "../assets/img1.jpg";
// import circleDots from "../../images/shap/circle-dots.png";
// import plusBlue from "../../images/shap/plus-blue.png";

const About = () => {
    return (
        <Container fluid="md">
            <Row>
                <h1>Sobre Nosotros</h1>

                <div className="banner-wraper">
                    <div className="page-banner-entry text-center">
                        <h1>Nuestra Misión</h1>
                        <p>Satisfacer las necesidades técnicas de los clientes y lograr que su negocio funcione es, evidentemente, uno de los principales objetivos de RH Ecommerce. Sin embargo, nuestra labor va mucho más allá. Nos gusta estar cerca del cliente, intercambiar opiniones, ideas, hablar sobre su negocio, ayudarle en cualquier cuestión que necesite. No podemos olvidar que nosotros también somos una empresa y, probablemente, hayamos pasado o estemos pasando por las mismas circunstancias que viven nuestros clientes.Por todo ello, la mayor satisfacción para nosotros es verlos crecer, ayudándoles en todo lo que podamos, mucho más allá de simplemente prestar un servicio técnico en PrestaShop.</p>
                    </div>
                </div><br />
                <div className="banner-wraper">
                    <div className="page-banner-entry text-center">
                        <h1>Nuestra Visión y Objetivos</h1>
                        <p>En RH Ecommerce nos esforzamos por seguir siendo una de las mejores empresas del mundo en el desarrollo de ecommerce RH Desarrollo Web para ofrecer siempre a nuestros clientes las mejores soluciones para sus empresas. No basta con crear una tienda online, nosotros queremos mejorarla, hacerla eficiente, lograr un diseño adecuado y personal y conseguir que todas las personas que confían en nosotros obtengan el éxito por el que trabajan incansablemente.</p>
                        <p>Nuestro objetivo es que nuestros clientes se sientan satisfechos con nuestro trabajo y que confíen en nosotros par todas las mejoras y necesidades que les surjan en su negocio. Hemos trabajado muy duro pero hemos conseguido destacar a nivel mundial dentro de las empresas que se dedican a RH Ecommerce. Por ello, mantenernos en ese nivel nos lleva a esforzarnos más cada día.</p>
                    </div>
                </div><br />
                {/* <img className="pt-img1 animate-wave" src={ } alt="" /> */}
                {/*
                <img className="pt-img2 animate2" src={circleDots} alt="" />
                <img className="pt-img3 animate-rotate" src={plusBlue} alt="" /> */}

                {/* <AboutSection /> */}

                {/* <FeatureSection3 /> */}

                {/* <TeamSection />

					<TestimonialSection />

					<LatestNewsSection /> */}

            </Row>
        </Container>

    )
}


export default About

