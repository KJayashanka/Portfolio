import { motion } from "framer-motion";
import {
  SiCss,
  SiGit,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiPhp,
  SiPython,
  SiReact,
  SiVuedotjs,
} from "react-icons/si";
import "./TechIconsBackground.css";

const icons = [
  { Icon: SiPhp, top: "12%", left: "8%", size: 46, duration: 9, delay: 0 },
  { Icon: SiReact, top: "22%", left: "88%", size: 40, duration: 11, delay: 0.6 },
  { Icon: SiLaravel, top: "68%", left: "6%", size: 42, duration: 10, delay: 1.2 },
  { Icon: SiJavascript, top: "78%", left: "90%", size: 38, duration: 8.5, delay: 0.3 },
  { Icon: SiVuedotjs, top: "40%", left: "4%", size: 36, duration: 12, delay: 0.9 },
  { Icon: SiMysql, top: "8%", left: "48%", size: 34, duration: 9.5, delay: 1.5 },
  { Icon: SiGit, top: "88%", left: "45%", size: 34, duration: 10.5, delay: 0.4 },
  { Icon: SiPython, top: "50%", left: "94%", size: 38, duration: 11.5, delay: 1.8 },
  { Icon: SiHtml5, top: "30%", left: "16%", size: 30, duration: 8, delay: 2.1 },
  { Icon: SiCss, top: "60%", left: "82%", size: 30, duration: 9, delay: 0.7 },
  { Icon: SiGitlab, top: "94%", left: "12%", size: 32, duration: 10, delay: 1.1 },
];

export default function TechIconsBackground() {
  return (
    <div className="tech-icons-bg" aria-hidden="true">
      {icons.map(({ Icon, top, left, size, duration, delay }, i) => (
        <motion.span
          key={i}
          className="tech-icon"
          style={{ top, left, fontSize: size }}
          animate={{ y: [0, -18, 0], rotate: [0, 6, 0] }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon />
        </motion.span>
      ))}
    </div>
  );
}
