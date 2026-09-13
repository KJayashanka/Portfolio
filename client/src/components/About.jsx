import ScrollReveal from "./ScrollReveal.jsx";
import { personal, education } from "../data/content.js";
import "./About.css";

export default function About() {
  return (
    <section id="about">
      <div className="container about-grid">
        <ScrollReveal>
          <p className="section-tag">About Me</p>
          <h2 className="section-title">
            Turning ideas into <span className="gradient-text">reliable software</span>
          </h2>

          {personal.bio.map((paragraph, i) => (
            <p className="about-paragraph" key={i}>
              {paragraph}
            </p>
          ))}

          <div className="about-education">
            <h3>{education.degree}</h3>
            <p className="about-education-meta">
              {education.institution} &middot; {education.duration}
            </p>
            <p className="about-education-detail">{education.detail}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
