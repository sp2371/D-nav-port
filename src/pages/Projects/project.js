import React, { useState } from "react";
import './project.css'
import portfolio1 from '../../assets/porfolio1 - Made with Clipchamp.mp4';
function Projects() {
    const [showModal, setShowModal] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);
    const handleMouseEnter = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
            setTimeoutId(null);
        }
        setShowModal(true);
    };
    const handleMouseLeave = () => {
        const id = setTimeout(() => {
            setShowModal(false);
        }, 30000);
        setTimeoutId(id);
    };
    return (
        <div>
            <div>
            {showModal && <video width="600" autoPlay>
                <source src={portfolio1} type="video/mp4" />
                Your browser does not support the video tag.
            </video>}
        </div>
        <div className="project-container">
            <h2>projects</h2>
            <ul className="list-container">
                <li onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Porfolio1
                </li>
            </ul>
        </div>
        </div>
    )
};
export default Projects;