import { Container, Row, Col} from 'react-bootstrap';

//import houseFlipper from '../../assets/img/myProjects/houseFlipper.jpg';
//import myPortfolio from '../../assets/img/myProjects/myPortfolio.jpg';
//import todoList from '../../assets/img/myProjects/todoList.jpg';
//import neonButton from '../../assets/img/myProjects/neonButton.jpg';
//import jinxArcane from '../../assets/img/myProjects/jinxArcane.jpg';


import './Projects.css'


export const Projects = () => {
/*
    const projects = [
        {
            title: 'House Flipper E-Commerce',
            imgUrl: houseFlipper

        },
        {
            title: 'My Portfolio',
            imgUrl: myPortfolio

        },
        {
            title: 'To-Do List',
            imgUrl: todoList

        },
        {
            title: 'Neon Button',
            imgUrl: neonButton

        }, 
        {
            title: 'Text Jinx Image',
            imgUrl: jinxArcane
        }
    ]
*/
    return(
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h1 className="cyberpunk-text">PROJECTS</h1>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}