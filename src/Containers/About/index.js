import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './About.scss';
import AboutUs from '../../Assets/aboutus.jpg';
const AboutPageContainer = ()=>{
    return(
        <>
            <Container>
                <Row>
                    <Col>
                    <Card className="aboutUs">
                        <Card.Img variant="top" src={AboutUs} />
                        <Card.Body>
                            <Card.Title>About Page</Card.Title>
                            <Card.Text>
                            I’m a User Interface Developer with about 12 years of experience. I like to work with passion for building cutting-edge, rich user interface with a nice coding standard and keep W3C web-standard in mind.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AboutPageContainer;