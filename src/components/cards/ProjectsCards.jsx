import  { useState } from 'react';
import { MyVerticallyCenteredModal } from '../modals/projectsModal';

import './ProjectsCards.css';
import '../../assets/css/cyberpunk.css'


export const ProjectCards = ({ id, src, title, description, link, repo }) => {
    const [modalShow, setModalShow] = useState(false);
    
    return(
        <>
            <div className={`div${id}`} onClick={() => setModalShow(true)}>
                <div className="cyber-tile-small fg-dark bg-cyberPink zoom">
                    <img src={src} />
                    <label>{title}</label>
                </div>
            </div>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                title={title}
                src={src}
                description={description}
                link={link}
                repo={repo}
            />
        </>
    );
}