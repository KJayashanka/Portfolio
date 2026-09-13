import { FiExternalLink } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal.jsx";
import { projects } from "../data/content.js";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <ScrollReveal>
          <p className="section-tag">Featured Work</p>
          <h2 className="section-title">
            Selected <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A few projects that reflect my interest in machine learning, mobile, and full-stack
            engineering.
          </p>
        </ScrollReveal>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <ScrollReveal delay={i * 0.1} key={project.title}>
              <article className="project-card">
                <span className="project-subtitle">{project.subtitle}</span>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                {project.link ? (
                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project <FiExternalLink />
                  </a>
                ) : null}
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
