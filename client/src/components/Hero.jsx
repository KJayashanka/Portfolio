import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personal } from "../data/content.js";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <motion.p
          className="section-tag"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {personal.name}
        </motion.h1>

        <motion.h2
          className="hero-role gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {personal.role}
        </motion.h2>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {personal.tagline}
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Link to="/projects" className="btn btn-primary">
            View Projects
          </Link>
          <Link to="/contact" className="btn">
            Get In Touch
          </Link>
        </motion.div>

        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <a href={personal.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={personal.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href={`mailto:${personal.email}`} aria-label="Email">
            <FiMail />
          </a>
        </motion.div>
      </div>

      <Link to="/about" className="hero-scroll" aria-label="Learn more about me">
        <FiArrowDown />
      </Link>
    </section>
  );
}
