import React from 'react';
import '../styles/Home.css';

const Home: React.FC = () => {
    return (
        <main className="home">
            <section className="hero">
                <img src="head.jpg" alt="Your Name" className="hero-image" />
                <div className="hero-content">
                    <h1>John Jamieson</h1>
                    <p className="tagline">Software Developer & Former Senior Business Analyst</p>
                    <p className="introduction">
                        Software developer with over 2 years of experience in Agile DevOps teams at one of
                        Canada's largest organizations and nearly 10 years of business analysis expertise at
                        prominent companies. Holds an honours bachelor's degree in Business Administration from
                        Wilfrid Laurier University, supplemented by technical education from Seneca’s
                        Computer Programming & Analysis program and the University of Toronto’s
                        Full Stack Web Development program.
                    </p>
                    <div className="cta-buttons">
                        <a href="/resume" className="btn">Resume</a>
                        <a href="/projects" className="btn">Projects</a>
                    </div>
                </div>
            </section>

            <section className="featured-image-section">
                <img
                    src="bigHead.jpg"
                    alt="Featured Work or Background"
                    className="featured-image"
                />
            </section>

        </main>
    );
};

export default Home;
