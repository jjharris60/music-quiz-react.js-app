import React from 'react';
import { useNavigate } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Home = () => {
    const navigate = useNavigate()
    return (
        <Container fluid className='vh-100 d-flex align-items-center justify-content-center m-0 p-0'>
            <Col>
                <Row className='d-flex justify-content-center mt-4'>
                    <Col className='col-lg-6'>
                        <h1 className='display-1 fw-bold homepagetext'>Song Quiz</h1>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center mt-4'>
                    <Col className='col-lg-3'>
                        <p className='m-0 p-0 fw-bolder homepagetext'>Aim of the Game:</p>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center mt-4'>
                    <Col className='col'>
                        <p className='m-0 pt-0 pb-0 pe-2 ps-2 fw-normal homepagetext'>You will hear a number of different tracks and will be asked a question about the track you are hearing.</p>
                    </Col>
                </Row>
                <Row className='d-flex mt-4'>
                    <Col className='col d-flex justify-content-center'>
                        <button className='custombutton btn btn-md' onClick={() => navigate("/audioplayer")}>Ready to play</button>
                    </Col>
                </Row>
            </Col>
        </Container>
    )
};

export default Home