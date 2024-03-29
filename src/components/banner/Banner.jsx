import { useState, useEffect } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import bannerImg from '../../assets/img/gifs/banner-cyberpunk-left.gif';


import './Banner.css';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100 - Math.random() * 500);
    const [index, setIndex] = useState(1);
    const toRotate = ['Welcome Samurai! We have a program to Code!', 'ようこそサムライ! プログラムをコーディングするんだ'];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">{text}</span>
                        <div className='name-info'>
                            <h1 className="cyberpunk-text glitched">Charly</h1>
                            <h1 className="cyberpunk-text glitched">Arreola</h1>
                            <h3>Web Developer</h3>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5} className="d-model-container">
                        <div className="image-wrapper">
                            <img className="image-1" src={bannerImg} alt="" />
                            <img className="image-2" src={bannerImg} alt="" />
                            <img className="image-3" src={bannerImg} alt="" />
                            <img className="image-4" src={bannerImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}