import React from 'react';
import '../styles/Resume.css';

const Resume: React.FC = () => {
    return (
        <div className="resume-container">
            <header className="resume-header">
                <h1>John Jamieson</h1>
                <p>Toronto, Ontario, Canada</p>
                <h2>Software Developer &amp; Former Senior Business Analyst</h2>
            </header>

            <section className="resume-summary">
                <h2>Profile</h2>
                <p>
                    Software developer with over 2 years of experience in Agile DevOps teams at one of
                    Canada's largest organizations and nearly 10 years of business analysis expertise at
                    prominent companies. Holds an honours bachelor's degree in Business Administration from
                    Wilfrid Laurier University, supplemented by technical education from Seneca’s Computer
                    Programming & Analysis program and the University of Toronto’s Full Stack Web Development
                    program.
                </p>
            </section>

            <section className="resume-skills">
                <h2>Skills</h2>
                <ul>
                    <li>Software Reliability Engineering</li>
                    <li>Cloud Infrastructure Monitoring &amp; Logging</li>
                    <li>Incident Response &amp; Troubleshooting</li>
                    <li>Infrastructure as Code (IaC)</li>
                    <li>Automation &amp; Scripting</li>
                    <li>CI/CD &amp; Deployment Automation</li>
                    <li>Containerization &amp; DevOps</li>
                </ul>
            </section>

            <section className="resume-technology">
                <h2>Technology</h2>
                <ul>
                    <li>
                        <strong>Languages:</strong> Python, JavaScript
                    </li>
                    <li>
                        <strong>Monitoring &amp; Logging:</strong> Datadog, Splunk
                    </li>
                    <li>
                        <strong>Cloud &amp; Infrastructure:</strong> AWS, Azure
                    </li>
                    <li>
                        <strong>Containerization &amp; Orchestration:</strong> Docker, Kubernetes
                    </li>
                    <li>
                        <strong>Incident Management:</strong> PagerDuty, Squadcast
                    </li>
                    <li>
                        <strong>Databases:</strong> MySQL, PostgreSQL, MongoDB, DynamoDB
                    </li>
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
                            Quickly became one of the top technical experts for ServiceNow on the team, working on
                            complex analysis to create problem diagnosis and potential solution reports.
                        </li>
                    </ul>
                    <h4>Business Analyst, Change Management</h4>
                    <ul>
                        <li>
                            Designed and built new and complex JIRA, Confluence, and EasyBI reports used by directors
                            and managers for improved decision making.
                        </li>
                        <li>
                            Collaborated with technical teams through one-on-one meetings and training to reduce roadblocks
                            and expedite the change submission and approval process.
                        </li>
                    </ul>
                    <h4>Technical Analyst, Payment Systems</h4>
                    <ul>
                        <li>
                            Refactored multiple programs—streamlining one from four files (674 lines) to two files (378 lines),
                            a 44% reduction—while enhancing commenting and readability for improved maintainability and
                            reduced debugging time.
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
                            Reduced monthly turnaround time on financial reporting—from a week to just hours—through
                            automation of financial models and other improvements.
                        </li>
                        <li>
                            Coordinated with internal stakeholders to transition from the old IAS 18 standard to the new
                            IFRS 15 revenue standard.
                        </li>
                        <li>
                            Created new revenue and cost of sales calculation systems for hundreds of projects in multiple
                            currencies across business entities.
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
                            Automated the monthly accounting process by replacing manual Excel-based methods with a system
                            that pulls data via SQL from the organization's main database.
                        </li>
                        <li>
                            Enhanced Excel formulas and reports to dramatically improve reporting quality and speed.
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
                            Improved management’s access to financial information by designing and automating customized
                            metrics dashboards.
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
                        <strong>Bachelor of Business Administration</strong> – Wilfrid Laurier University, Waterloo, Ontario,
                        Canada
                    </li>
                </ul>
            </section>

            <section className="resume-projects">
                <h2>Personal Projects</h2>
                <div className="project-item">
                    <h3>John &amp; Rosemary’s Wedding Website</h3>
                    <p>
                        <strong>Repository:</strong>{' '}
                        <a
                            href="https://github.com/John-C-Jamieson/weddingJava"
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
                            <strong>Build Automation:</strong> Maven
                        </li>
                        <li>
                            <strong>Frontend:</strong> Bootstrap, Thymeleaf, HTML, CSS, JavaScript
                        </li>
                        <li>
                            <strong>Backend:</strong> Java, Spring, MySQL, Dotenv
                        </li>
                        <li>
                            <strong>Deployment:</strong> Heroku, JawsDB, GitHub
                        </li>
                    </ul>
                </div>

                <div className="project-item">
                    <h3>John’s Profile Website</h3>
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
                            johnjamieson.ca
                        </a>
                    </p>
                    <ul>
                        <li>
                            <strong>Build Automation:</strong> NPM
                        </li>
                        <li>
                            <strong>Frontend:</strong> TypeScript, React
                        </li>
                        <li>
                            <strong>Backend:</strong> TypeScript, Express
                        </li>
                        <li>
                            <strong>Deployment:</strong> Netlify, GitHub
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Resume;
