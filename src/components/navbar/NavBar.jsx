import { useState, useEffect} from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import profileLogo from "../../assets/img/profile-logo.jpg";

import "./NavBar.css";


/* Todo: Create icons component based on icons of IG */

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            window.scrollY > 50 ? setScrolled(false) : setScrolled(true);
        }

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={profileLogo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggle-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home"  className={activeLink === 'home' ? "active navbar-link" : "navbar-link"} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#about" className={activeLink === 'about' ? "active navbar-link" : "navbar-link"} onClick={()=>onUpdateActiveLink('about')}>About</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? "active navbar-link" : "navbar-link"} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? "active navbar-link" : "navbar-link"} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        
                    </div>
                    <button className="cyberpunk-glitched" onClick={() => console.log('connect')}><span>Let's Connect!</span></button>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}