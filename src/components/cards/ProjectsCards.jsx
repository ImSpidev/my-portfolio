import './ProjectsCards.css';
import '../../assets/css/cyberpunk.css'


export const ProjectCards = ({ id, src, title }) => {
    return(
        <>
            <div className={`div${id}`}>
                <span></span>
                <div className="cyber-tile-small fg-dark bg-cyberPink">
                    <img src={src} />
                    <label>{title}</label>
                </div>
            </div>
        </>
    );
}