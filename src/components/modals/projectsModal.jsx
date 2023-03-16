import { FaImage, FaGithub} from "react-icons/fa";
import Modal from 'react-bootstrap/Modal';

import './projectsModal.css';

export const MyVerticallyCenteredModal = (props) => {
    return (
    <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header>
            <Modal.Title className="no-shadow" id="contained-modal-title-vcenter">
                {props.title}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={props.src} />
            <p>
                {props.description}
            </p>
            <div className="social-media-icons">
                <a href={props.link} target='_blank' className="link link-modal">
                    <FaImage className="web"/>
                </a>
                <a href={props.repo} target='_blank' className="link link-modal">
                    <FaGithub className="github"/>
                </a>
            </div>
        </Modal.Body>
    </Modal>
    );
}