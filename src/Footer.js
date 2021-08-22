import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      💻 & 🎨 with ❤️ in Berlin by{" "}
      <a
        className="portfolio-git"
        href="https://elegant-almeida-1182c1.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        Iza Habjan
      </a>{" "}
      <a
        href="https://github.com/iza-habjan/shecodes-weather-app"
        target="_blank"
        rel="noreferrer"
      >
        <span>
          / <span className="portfolio-git"> GitHub</span>{" "}
        </span>
      </a>{" "}
    </footer>
  );
}
