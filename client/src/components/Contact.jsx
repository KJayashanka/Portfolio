import { useState } from "react";
import { FiGithub, FiLinkedin, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal.jsx";
import { personal } from "../data/content.js";
import "./Contact.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: "idle", error: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", error: "" });

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus({ state: "success", error: "" });
      setForm(initialForm);
    } catch (err) {
      setStatus({ state: "error", error: err.message });
    }
  };

  return (
    <section id="contact">
      <div className="container contact-grid">
        <ScrollReveal>
          <p className="section-tag">Get In Touch</p>
          <h2 className="section-title">
            Let's build something <span className="gradient-text">great together</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or just want to connect? Send a message and I'll get back to
            you soon.
          </p>

          <div className="contact-details">
            <a href={`mailto:${personal.email}`} className="contact-detail">
              <FiSend /> {personal.email}
            </a>
            <span className="contact-detail">
              <FiPhone /> {personal.phone}
            </span>
            <span className="contact-detail">
              <FiMapPin /> {personal.location}
            </span>
          </div>

          <div className="contact-socials">
            <a href={personal.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </div>

            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </div>

            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
              />
            </div>

            <button type="submit" className="btn btn-primary" disabled={status.state === "loading"}>
              {status.state === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status.state === "success" && (
              <p className="form-status success">Message sent! I'll get back to you soon.</p>
            )}
            {status.state === "error" && <p className="form-status error">{status.error}</p>}
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
