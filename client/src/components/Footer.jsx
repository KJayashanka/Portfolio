import { personal } from "../data/content.js";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          &copy; {new Date().getFullYear()} {personal.name}. Built with React, Three.js & Node.js.
        </p>
      </div>
    </footer>
  );
}
