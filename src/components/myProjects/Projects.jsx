import { Container, Row, Col} from 'react-bootstrap';
import { ProjectCards } from '../cards/ProjectsCards';
import aboutImg from '../../assets/img/about-img.jpg';

import schooliBox from '../../assets/img/myProjects/schooliBox.png';
import houseFlipper from '../../assets/img/myProjects/houseFlipper.png';
import yomilunch from '../../assets/img/myProjects/yomilunch.png';
import schooliBoxLp from '../../assets/img/myProjects/schooliBoxLp.png';
//import myPortfolio from '../../assets/img/myProjects/myPortfolio.png';
import todoList from '../../assets/img/myProjects/todoList.png';


import './Projects.css'


export const Projects = () => {

    const projects = [
        {
            title: 'School iBox (Web App)',
            imgUrl: schooliBox

        },
        {
            title: 'House Flipper  (E-Commerce)',
            imgUrl: houseFlipper

        },
        {
            title: 'YomiLunch (Web App)',
            imgUrl: yomilunch
        },
        {
            title: 'School iBox (Landing Page)',
            imgUrl: schooliBoxLp

        },
        {
            title: 'My Portfolio',
            imgUrl: aboutImg

        }, 
        {
            title: 'To-Do List',
            imgUrl: todoList
        }
        
    ]
    return(
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h1 className="cyberpunk-text">PROJECTS</h1>
                        <p className="projects-description">
                            Here are some of the proyects that I've done along my carrer, you can check the demo or check the code in Github
                        </p>
                        <div className="projects-grid">
                            {
                                projects.map((project, index)=>{
                                    return(
                                        <ProjectCards 
                                            id={index}
                                            src={project.imgUrl}
                                            title={project.title}
                                        />
                                    )
                                })
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}