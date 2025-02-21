import React from 'react';
import '../styles/Home.css';

const Home: React.FC = () => {
    return (
        <main className="home">
            <section className="hero">
                <img src="head.jpg" alt="a small picture of John" className="hero-image" />
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
                </div>
            </section>

            <section className="featured-image-section">
                <img
                    src="bigHead.jpg"
                    alt="a big picture of John"
                    className="featured-image"
                />
            </section>

        </main>
    );
};

export default Home;
