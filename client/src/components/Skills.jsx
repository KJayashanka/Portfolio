import ScrollReveal from "./ScrollReveal.jsx";
import { skills } from "../data/content.js";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <ScrollReveal>
          <p className="section-tag">Technologies & Tools</p>
          <h2 className="section-title">
            My <span className="gradient-text">Skill Set</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I use to design, build, and ship full-stack applications.
          </p>
        </ScrollReveal>

        <div className="skills-grid">
          {skills.map((group, i) => (
            <ScrollReveal delay={i * 0.08} key={group.category}>
              <div className="skill-card">
                <h3>{group.category}</h3>
                <div className="skill-tags">
                  {group.items.map((item) => (
                    <span className="skill-tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
