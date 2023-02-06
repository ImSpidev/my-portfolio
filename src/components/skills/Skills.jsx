import { Container, Row, Col} from 'react-bootstrap';
import { SkillCard } from '../cards/SkillCard';

import htmlIcon from '../../assets/img/svg/html-5-icon.svg';
import cssIcon from '../../assets/img/svg/css-3-icon.svg';
import jsIcon from '../../assets/img/svg/js-icon.svg';
import phpIcon from '../../assets/img/svg/php-icon.svg';
import reactIcon from '../../assets/img/svg/react-icon.svg';

//import {ReactComponent as ReactIcon} from '../../assets/img/svg/react-icon.svg';

import './Skills.css';

export const Skills = () => {

    const skills = [
        {
            id: 1, 
            name: 'HTML',
            svg: htmlIcon,
            className: 'html-icon'
        }, 
        {
            id: 2, 
            name: 'CSS',
            svg: cssIcon,
            className: 'css-icon'
        },
        {
            id: 3, 
            name: 'JavaScript',
            svg: jsIcon,
            className: 'js-icon'
        },
        {
            id: 4, 
            name: 'React',
            svg: reactIcon,
            className: 'react-icon'
        },
        {
            id: 5, 
            name: 'PHP',
            svg: phpIcon,
            className: 'php-icon'
        }
    ]

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-box">
                            <div className="skill-info">
                            <h1 className="cyberpunk-text">SKILLS</h1>
                            <p> Here is my favourite Tech Stack, languages and frameworks that I use in most of my projects. 
                                <br />
                                Currently I'm learning mobile development too and I'm open to learn and work with other Tech Stack if it's necesary. 
                            </p>
                            </div>
                            <div className="skill-container">
                                {
                                    skills.map((skill, index)=>{
                                        return(
                                            <SkillCard 
                                                skillName={skill.name}
                                                skillSvg={skill.svg}
                                                skillClassName={skill.className}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}