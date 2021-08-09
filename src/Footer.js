import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="common-font">
      👩🏻‍💻 & 👩🏻‍🎨 with ♥︎ in Berlin by{" "}
      <a
        className="link"
        href="https://www.shecodes.io/students/295-iza-habjan"
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
      <div>
        <span className="icons-made-by">
          Icons made by{" "}
          <a
            className="link"
            href="https://www.freepik.com"
            title="Freepik"
            target="_blank"
            rel="noreferrer"
          >
            Freepik{" "}
          </a>
          from{" "}
          <a
            className="link"
            href="https://www.flaticon.com/"
            title="Flaticon"
            target="_blank"
            rel="noreferrer"
          >
            www.flaticon.com
          </a>
        </span>
      </div>
    </footer>
  );
}
