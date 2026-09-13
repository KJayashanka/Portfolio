import { useMemo, useState } from "react";
import ScrollReveal from "./ScrollReveal.jsx";
import { experience } from "../data/content.js";
import "./Experience.css";

export default function Experience() {
  const types = useMemo(() => ["All", ...new Set(experience.map((job) => job.type))], []);
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? experience : experience.filter((job) => job.type === filter);

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <ScrollReveal>
          <p className="section-tag">Career Path</p>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Roles where I've shipped production features and grown as an engineer.
          </p>
        </ScrollReveal>

        <div className="experience-filters">
          {types.map((type) => (
            <button
              key={type}
              className={`experience-filter ${filter === type ? "active" : ""}`}
              onClick={() => setFilter(type)}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="experience-timeline">
          {filtered.map((job, i) => (
            <ScrollReveal delay={i * 0.1} key={job.company + job.duration}>
              <div className="experience-item">
                <div className="experience-marker" />
                <div className="experience-content">
                  <div className="experience-header">
                    <h3>{job.role}</h3>
                    <span className="experience-duration">{job.duration}</span>
                  </div>
                  <p className="experience-company">
                    {job.company} &middot; {job.location}
                  </p>
                  <ul className="experience-points">
                    {job.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
