import React from 'react';
import '../styles/Projects.css';

const Projects: React.FC = () => {
    return (
        <div className="projects-container">
            <h1>Personal Projects</h1>

            <div className="project-item">
                <h2>John &amp; Rosemary’s Wedding Website</h2>
                <p className="project-type">Java Spring Web Application (still in development)</p>
                <p>
                    <strong>Repository:</strong>{' '}
                    <a href="https://github.com/John-C-Jamieson/weddingJava" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </p>
                <p>
                    <strong>Deployment:</strong>{' '}
                    <a href="https://wedding.johnjamieson.ca/" target="_blank" rel="noopener noreferrer">
                        wedding.johnjamieson.ca
                    </a>
                </p>
                <ul>
                    <li><strong>Build Automation:</strong> Maven</li>
                    <li><strong>Frontend:</strong> Bootstrap, Thymeleaf, HTML, CSS, JavaScript</li>
                    <li><strong>Backend:</strong> Java, Spring, MySQL, Dotenv</li>
                    <li><strong>Deployment:</strong> Heroku, JawsDB, GitHub</li>
                </ul>
            </div>

            <div className="project-item">
                <h2>John’s Profile Website</h2>
                <p className="project-type">Node.js Web Application (still in development)</p>
                <p>
                    <strong>Repository:</strong>{' '}
                    <a href="https://github.com/John-C-Jamieson/personal-web-page" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </p>
                <p>
                    <strong>Deployment:</strong>{' '}
                    <a href="https://www.johnjamieson.ca/" target="_blank" rel="noopener noreferrer">
                        johnjamieson.ca
                    </a>
                </p>
                <ul>
                    <li><strong>Build Automation:</strong> NPM</li>
                    <li><strong>Frontend:</strong> React</li>
                    <li><strong>Backend:</strong> JavaScript, Express</li>
                    <li><strong>Deployment:</strong> Netlify, GitHub</li>
                </ul>
            </div>
        </div>
    );
};

export default Projects;
