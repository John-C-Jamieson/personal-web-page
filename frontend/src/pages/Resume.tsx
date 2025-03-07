import React from 'react';
import '../styles/Resume.css';

const Resume: React.FC = () => {
    return (
        <div className="resume-container">
            <header className="resume-header">
                <h1>John Jamieson</h1>
                <p>Toronto, Ontario, Canada</p>
                <h2>Experienced Technical Professional<br/>&amp;<br/>Former Senior Business Analyst</h2>
            </header>

            <section className="resume-summary">
                <h2>Profile</h2>
                <p>
                    Experienced technical professional with over 2 years of industry experience in software
                    development at CIBC, the fifth largest financial institution in Canada, and nearly 10 years of
                    industry experience in business analysis. Holds an honours bachelor's degree in Business
                    Administration from Wilfrid Laurier University, supplemented by technical education from Seneca’s
                    Computer Programming &amp; Analysis program and the University of Toronto’s Full Stack Web
                    Development program.
                </p>
            </section>

            <section className="resume-skills">
                <h2>Skills</h2>
                <ul>
                    <li>Full-Stack Software Development</li>
                    <li>REST API &amp; Microservices Design and Implementation</li>
                    <li>CI/CD Pipelines</li>
                    <li>Automated Builds &amp; Cloud Deployment</li>
                    <li>Secure Coding Practices</li>
                    <li>Application Performance Optimization</li>
                    <li>Test-Driven Development (TDD)</li>
                    <li>Unit &amp; Integration Testing</li>
                    <li>Agile Methodologies</li>
                    <li>Team Collaboration &amp; Code Reviews</li>
                    <li>Database Design</li>
                    <li>Query Optimization</li>
                    <li>System Administration</li>
                </ul>
            </section>

            <section className="resume-technology">
                <h2>Technology</h2>
                <ul>
                    <li><strong>Languages:</strong> Java, Kotlin, JavaScript, TypeScript, SQL</li>
                    <li><strong>Backend:</strong> Spring Boot, Express</li>
                    <li><strong>Frontend:</strong> Angular, React</li>
                    <li><strong>Databases:</strong> MySQL, PostgreSQL</li>
                    <li><strong>Version Control:</strong> Git, GitHub</li>
                    <li><strong>Build Tools &amp; Deployment:</strong> Maven, NPM, Jenkins, Docker, Kubernetes</li>
                    <li><strong>Testing Frameworks:</strong> JUnit, Mockito, Cypress</li>
                </ul>
            </section>

            <section className="resume-experience">
                <h2>Work Experience</h2>
                <div className="experience-item">
                    <h3>CIBC</h3>
                    <p className="date-location">
                        <em>Toronto, Ontario, Canada | 01/2022 – 07/2024</em>
                    </p>
                    <h4>Technical Analyst, ServiceNow Systems</h4>
                    <ul>
                        <li>
                            Quickly became one of the top technical experts for ServiceNow on the team, working on complex analysis to create problem diagnosis and potential solution reports.
                        </li>
                        <li>
                            Served as a key technical resource, troubleshooting complex incidents by analyzing logs, stack traces, and system metrics to drive rapid resolutions.
                        </li>
                    </ul>
                    <h4>Business Analyst, Change Management</h4>
                    <ul>
                        <li>
                            Designed and built new and complex JIRA, Confluence, and EasyBI reports that were used by directors and managers for improved decision making.
                        </li>
                        <li>
                            Worked closely with the technical teams through one on one meetings and training to dramatically reduce the number of roadblocks encountered and generally sped up the change submission and approval process.
                        </li>
                    </ul>
                    <h4>Technical Analyst, Payment Systems</h4>
                    <ul>
                        <li>
                            Refactored multiple programs, including streamlining one from four files (674 lines) to two files (378 lines), a 44% reduction, while enhancing commenting and readability, leading to improved maintainability and reduced debugging time.
                        </li>
                        <li>
                            Lead root cause analysis and collaborated with cross-functional teams to troubleshoot and resolve critical system issues, ensuring high service reliability.
                        </li>
                    </ul>
                </div>

                <div className="experience-item">
                    <h3>Entertainment One</h3>
                    <p className="date-location">
                        <em>Toronto, Ontario, Canada | 11/2016 – 12/2019</em>
                    </p>
                    <h4>Senior Accountant</h4>
                    <ul>
                        <li>
                            Reduced monthly turnaround time on financial reporting, in some cases from a week to just hours, with automation of financial models and other improvements.
                        </li>
                        <li>
                            Worked with the relevant internal stakeholders to coordinate the transition from the old IAS 18 standard to the new IFRS 15 revenue standard.
                        </li>
                        <li>
                            Created new revenue and cost of sales calculations system for hundreds of different projects in multiple currencies across multiple business entities.
                        </li>
                    </ul>
                </div>

                <div className="experience-item">
                    <h3>Circle of Care</h3>
                    <p className="date-location">
                        <em>Toronto, Ontario, Canada | 07/2014 – 10/2016</em>
                    </p>
                    <h4>Intermediate Accountant</h4>
                    <ul>
                        <li>
                            Converted the monthly accounting process from a manual system reliant on multiple unconnected Microsoft Excel documents to an automated system that pulls data via SQL from the organization's main database.
                        </li>
                        <li>
                            Developed new, and improved existing, Excel formulas and documents which dramatically improved reporting quality and speed.
                        </li>
                    </ul>
                </div>

                <div className="experience-item">
                    <h3>Salumatics</h3>
                    <p className="date-location">
                        <em>Toronto, Ontario, Canada | 05/2011 – 06/2014</em>
                    </p>
                    <h4>Junior Accountant</h4>
                    <ul>
                        <li>
                            Created custom metrics dashboards to improve management’s access to real-time financial data.
                        </li>
                        <li>
                            Partnered with stakeholders to automate reporting solutions, significantly enhancing operational efficiency.
                        </li>
                    </ul>
                </div>
            </section>

            <section className="resume-education">
                <h2>Education</h2>
                <ul>
                    <li>
                        <strong>Full Stack Web Development</strong> – University of Toronto, Toronto, Ontario, Canada
                    </li>
                    <li>
                        <strong>Computer Programming &amp; Analysis</strong> – Seneca College, Toronto, Ontario, Canada
                    </li>
                    <li>
                        <strong>Bachelor of Business Administration</strong> – Wilfrid Laurier University, Waterloo, Ontario, Canada
                    </li>
                </ul>
            </section>

            <section className="resume-projects">
                <h2>Personal Projects</h2>
                <div className="project-item">
                    <h3>John’s Profile Website</h3>
                    <p>
                        <em>TypeScript Node Web Application (still in development)</em>
                    </p>
                    <p>
                        <strong>Repository:</strong>{' '}
                        <a
                            href="https://github.com/John-C-Jamieson/personal-web-page"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </p>
                    <p>
                        <strong>Deployment:</strong>{' '}
                        <a
                            href="https://www.johnjamieson.ca/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            www.johnjamieson.ca
                        </a>
                    </p>
                    <ul>
                        <li>
                            <strong>Build Automation:</strong> NPM + Maven
                        </li>
                        <li>
                            <strong>Frontend:</strong> React + TypeScript
                        </li>
                        <li>
                            <strong>Backend:</strong> Spring + Java
                        </li>
                        <li>
                            <strong>Deployment:</strong> Netlify + GitHub
                        </li>
                    </ul>
                </div>

                <div className="project-item">
                    <h3>John &amp; Rosemary’s Wedding Website</h3>
                    <p>
                        <em>TypeScript Node Web Application (still in development)</em>
                    </p>
                    <p>
                        <strong>Repository:</strong>{' '}
                        <a
                            href="https://github.com/John-C-Jamieson/wedding"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </p>
                    <p>
                        <strong>Deployment:</strong>{' '}
                        <a
                            href="https://wedding.johnjamieson.ca/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            wedding.johnjamieson.ca
                        </a>
                    </p>
                    <ul>
                        <li>
                            <strong>Build Automation:</strong> NPM + Maven
                        </li>
                        <li>
                            <strong>Frontend:</strong> Angular + TypeScript
                        </li>
                        <li>
                            <strong>Backend:</strong> Spring + Java
                        </li>
                        <li>
                            <strong>Deployment:</strong> Netlify + GitHub
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Resume;
