import { useState, useEffect} from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import profileLogo from "../../assets/img/profile-logo.jpg";

import { FaBars } from "react-icons/fa";

import "./NavBar.css";


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
        <Navbar collapseOnSelect expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={profileLogo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" data-bs-toggle="collapse" data-bs-target="#basic-navbar-nav">
                    <FaBars />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" eventKey="1"  className={activeLink === 'home' ? "active navbar-link" : "navbar-link"} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#about" eventKey="2" className={activeLink === 'about' ? "active navbar-link" : "navbar-link"} onClick={()=>onUpdateActiveLink('about')}>About</Nav.Link>
                    <Nav.Link href="#skills" eventKey="3" className={activeLink === 'skills' ? "active navbar-link" : "navbar-link"} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" eventKey="4" className={activeLink === 'projects' ? "active navbar-link" : "navbar-link"} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    <Nav.Link href="#contact" eventKey="5" className={activeLink === 'contact' ? "active navbar-link" : "navbar-link"} onClick={()=>onUpdateActiveLink('contact')}>Contact</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <button className="cyberpunk-glitched" onClick={() => window.location = 'mailto:spidev.cto@gmail.com'}><span>Let's Connect!</span></button>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}