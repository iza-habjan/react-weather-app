import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="common-font">
      👩🏻‍💻 & 👩🏻‍🎨 with ♥︎ in Berlin by{" "}
      <a
        className="link"
        href="https://elegant-almeida-1182c1.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        Iza Habjan
      </a>
      <a
        className="link"
        href="https://github.com/iza-habjan/shecodes-weather-app"
        target="_blank"
        rel="noreferrer"
      >
        <span> / GitHub </span>
      </a>{" "}
    </footer>
  );
}
