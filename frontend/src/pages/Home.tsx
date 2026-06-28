import React from "react";
import { profile, skills, experience, education } from "../data/profile";

const Home: React.FC = () => (
  <main id="top">
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="eyebrow">{profile.eyebrow}</p>
          <h1>{profile.headline}</h1>
          <p className="subline">{profile.subline}</p>
          <p className="intro">{profile.intro}</p>
        </div>
        <img
          className="avatar"
          src={`${process.env.PUBLIC_URL}/head.jpg`}
          alt="John Jamieson"
        />
      </div>
    </section>

    <section id="about" className="section alt">
      <div className="container">
        <h2>About</h2>
        <p className="lead">{profile.about}</p>
      </div>
    </section>

    <section id="skills" className="section">
      <div className="container">
        <h2>Core skills</h2>
        <div className="cards">
          {skills.map((s) => (
            <div className="card" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="experience" className="section alt">
      <div className="container">
        <h2>Experience</h2>
        {experience.map((item, i) =>
          item.type === "job" ? (
            <article className="xp" key={i}>
              <div className="xp-head">
                <span className="xp-co">{item.company}</span>
                <span className="xp-dt">
                  {item.dates} · {item.location}
                </span>
              </div>
              <p className="xp-role">{item.role}</p>
              <ul>
                {item.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </article>
          ) : (
            <p className="xp-note" key={i}>
              <strong>{item.label}</strong> {item.text}
            </p>
          )
        )}
      </div>
    </section>

    <section id="education" className="section">
      <div className="container">
        <h2>Education</h2>
        <ul className="edu">
          {education.map((e) => (
            <li key={e.credential}>
              <span className="edu-cred">{e.credential}</span> — {e.school}
              <span className="edu-year"> · {e.year}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </main>
);

export default Home;
