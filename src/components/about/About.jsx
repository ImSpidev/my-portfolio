import { Container, Row, Col} from 'react-bootstrap';
import aboutImg from '../../assets/img/about-img.jpg';

import './About.css';


export const About = () => {
    return (
        <section className="about" id="about">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={5}>
                        <div className='about-image-container'>
                            <img className="cyberpunk-image" width="600" height="300" src={aboutImg} alt="" />
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <div className="about-info">
                            <h1 className="cyberpunk-text">ABOUT</h1>
                            <p>
                                Hi! I'm Charly Arreola, better known as "Spidev", Software Developer/Web Developer, focused on Front End.
                                <br />
                                Passionate about design, creating amazing things with code, pixel perfect and neon colors.
                                <br />
                                <br />
                                I'm good at understanding people and what they need to turn ideas into something real.
                                <br />
                                <br />
                                Organized, I like to solve problems and pay a lot of attention to details, 
                                so I can be the best choice for that idea you have in mind.
                                <br />
                                <br />
                                <br />
                            </p>
                            <span className="lets-connect">Let's Connect, Samurai!</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}