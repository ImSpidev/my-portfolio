import './SkillCard.css';


export const SkillCard = ({ skillName, skillSvg, skillClassName }) => {
    return (
        <>
            <div className="crd-container">
                <div className="skill-card">
                    <h3 className="skill-title">{skillName}</h3>
                    <div className={`cirlce ${skillClassName}`}>
                    <img src={skillSvg} alt="Skill Logo" className='skill-logo'/>
                    </div>
                </div>
                <div className="skill-holder">
                    <div className={`skill-image ${skillClassName}`}>
                        <img src={skillSvg} alt="Skill Logo" className='skill-logo'/>
                    </div>
                    <div className="skill-name">
                        <span>{skillName}</span>
                    </div>
                </div>
            </div>
        </>
    );
}