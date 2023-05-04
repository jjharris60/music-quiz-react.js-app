import React from 'react';
import { useNavigate } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    const navigate = useNavigate();
    return (
        <Container fluid className='vh-100 d-flex align-items-center justify-content-center m-0 p-0'>
            <Col>
                <Row className='d-flex justify-content-center mt-4'>
                    <Col className='col-6'>
                        <h1 className='display-1 homepagetext'>What Song?</h1>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center mt-4'>
                    <Col className='col-3'>
                        <p className='m-0 p-0 fw-bolder homepagetext'>Aim of the Game:</p>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center mt-4'>
                    <Col className='col-12'>
                        <p className='m-0 p-0 fw-normal homepagetext'>You will hear a number of different tracks and will be asked a question about the track you are hearing.</p>
                    </Col>
                </Row>
                <Row className='d-flex mt-4'>
                    <Col className='col-12 d-flex justify-content-center'>
                        <button id='button-custom' onClick={() => navigate("/audioplayer")}>Ready to play</button>
                    </Col>
                </Row>

            </Col>
        </Container>
    )
    // return (
    //     <Container fluid className='p-0 d-flex vh-100'>
    //         <Row className='d-flex row'>
    //             <Row className='justify-content-center'>
    //                 <Col xs={12} className='d-flex justify-content-center'>
    //                     <h1 className='homepageh1 m-0 p-0 display-1 fw-bold'>What song?</h1>
    //                 </Col>
    //             </Row>
    //             <Row className='justify-content-center'>
    //                 <Col xs={12} className='d-flex justify-content-center'>
    //                     <p className='m-0 p-0 fw-bolder'>Aim of the Game:</p>
    //                 </Col>
    //             </Row>
    //             <Row className='justify-content-center'>
    //                 <Col xs={12} className='d-flex justify-content-center'>
    //                     <p className='m-0 p-0 fw-normal'>You will hear a number of different tracks and will be asked a question about the track you are hearing.</p>
    //                 </Col>
    //             </Row>
    //             <Row className='justify-content-center'>
    //                 <Col xs={12} className='d-flex justify-content-center'>
    //                     <Button onClick={() => navigate("/audioplayer")}>Ready to play</Button>
    //                 </Col>
    //             </Row>
    //         </Row>
    //     </Container>
    // )
};

export default Home;