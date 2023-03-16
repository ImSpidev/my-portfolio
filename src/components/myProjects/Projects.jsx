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
            imgUrl: schooliBox,
            description: "My biggest project to date is not my own project, but it is one that I have been working on since it started and it is where I am currently working.\n\n"+"It is an application focused on school's administration (from the administrative part as such, homework management, grading, etc.).\n\n"+
            "We have about 100 clients around Mexico and I'm in charge of developing new features, supporting existing ones and talking with clients to develop new ones.\n\n"+ 
            "It is developed with HTML, CSS, JS (Vanilla and JQuery), PHP and MySQL.\n\n"+ 
            "Because confidentiality and privacy reasons I can't put links to the repositories and/or the platform",
            link: '#',
            repo:  '#'

        },
        {
            title: 'House Flipper  (E-Commerce)',
            imgUrl: houseFlipper,
            description: "This project is the final project of the React Bootcamp taught by Wizeline Academy.\n\n"+
            "It consisted of making an E-Commerce, consuming data from an API that they provided us.\n\n"+ 
            "We had to have a carousel to show the most recent products, a list of all products with their description, add them to a cart, add and/or remove products from the cart, calculate the total number of products and proceed to a payment section (we did not implement the ability to pay, as it was not a requirement).\n\n"+
            "It was done entirely with React.",
            link: 'https://6253b966e0d9b70a6e9cc271--house-flipper.netlify.app/',
            repo:  'https://github.com/ImSpidev/react-bootcamp-capstone-4'
        },
        {
            title: 'YomiLunch (Web App)',
            imgUrl: yomilunch,
            description: "It is currently the project I am working on within the company where I work.\n\n"+
            "It is a cafeteria manager (which will be connected to the main application 'School iBox'), which consists on a point of sale, sales record, product management, discounts, balances, etc...\n\n"+
            "I'm developing this project completely on my own (without anyone helping me) and the technologies used for this are HTML, CSS, JS (Vanilla and JQuery), PHP and MySQL.\n\n"+ 
            "Because confidentiality and privacy reasons I can't put links to the repositories and/or the platform",
            link: '#',
            repo:  '#'
        },
        {
            title: 'School iBox (Landing Page)',
            imgUrl: schooliBoxLp,
            description: "The home page of the company where I am currently working.\n\n"+
            "It was made using only HTML, CSS & JS.",
            link: 'https://schoolibox.com/',
            repo:  '#'
        },
        {
            title: 'My Portfolio (Landing Page)',
            imgUrl: aboutImg,
            description: "The page where you are currently located, my personal brand and my little piece on the Web.\n\n"+
            "I was inspired by a 'Cyberpunk' or 'Retro Futuristic' design as I love those styles.\n\n"+
            "I made it completely in React",
            link: 'https://spidev.net/',
            repo:  'https://github.com/ImSpidev/my-portfolio'
        }, 
        {
            title: 'To-Do List (Web App)',
            imgUrl: todoList,
            description: "My first project made with React, a simple ToDo List, which uses the local storage to save the tasks that are created and thus not need a database.\n\n"+
            "As I said, it's completely done in React",
            link: 'https://imspidev.github.io/react-todo-list/',
            repo:  'https://github.com/ImSpidev/react-todo-list'
        }
        
    ]

    return(
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h1 className="cyberpunk-text projects-title">PROJECTS</h1>
                        <p className="projects-description">
                            Here are some of the proyects that I've done along my carrer, you can check the demo or check the code in Github
                        </p>
                        <div className="projects-grid" >
                            {
                                projects.map((project, index)=>{
                                    return(
                                        <ProjectCards 
                                            id={index}
                                            src={project.imgUrl}
                                            title={project.title}
                                            description={project.description}
                                            link={project.link}
                                            repo={project.repo}
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