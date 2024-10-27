import React, { useEffect, useState } from "react";
import './project.css'
import portfolio1 from '../../assets/porfolio1 - Made with Clipchamp.mp4';
import Modal from '../../components/Modal/modal'
function Projects() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    useEffect(() => {
        setTimeout(() => {
            if (isModalOpen) {
                closeModal();
            }
        }, 14000)
    }, [isModalOpen])
    return (
        <div>

            <div className="project-container">
                <h2>projects</h2>
                <ul className="list-container">
                    <li onClick={openModal}
                    >
                        Porfolio1
                    </li>
                </ul>
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <video width="500" autoPlay style={{
                        opacity: isModalOpen ? 1 : 0,
                        transform: isModalOpen ? 'scale(1)' : 'scale(0.95)',
                        transition: 'opacity 0.5s ease, transform 0.5s ease',
                        filter: 'brightness(1.5)',
                    }} muted onClick={redirectPage}>
                        <source src={portfolio1} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Modal>
            </div>
        </div>
    )
};
export const redirectPage = () => {
    const url = "https://portfolio-swayamprakash.netlify.app/";
    window.open(url, "_blank");
}
export default Projects;