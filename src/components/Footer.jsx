import React from "react";
import "../services/home.css";
import alkemyLogo from "../services/alkemy.jpg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="creator-wrapper">
          <div>
            <h3>Agustín Gómez Urrutia</h3>
          </div>
          <div>
            <ul>
              <li>
                <img
                  src="https://icongr.am/devicon/linkedin-original.svg?size=30&color=currentColor"
                  alt="linkedin-icon"
                />{" "}
                <a
                  href="https://www.linkedin.com/in/raul-agustin-gomez-urrutia/"
                  target="blank"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <img
                  src="https://icongr.am/fontawesome/github.svg?size=30&color=ffffff"
                  alt="github-icon"
                />{" "}
                <a href="https://github.com/agustingu20" target="blank">
                  Github
                </a>
              </li>
              <li>
                <img
                  src="https://icongr.am/fontawesome/whatsapp.svg?size=30&color=008000"
                  alt="whatsapp-icon"
                />{" "}
                <a href="https://wa.me/543814470368" target="blank">
                  Whatsapp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="alkemy-wrapper">
          <h3>
            Powered by:{" "}
            <img src={alkemyLogo} className="alkemy-logo" alt="alkemy-logo" />
          </h3>
        </div>
      </div>
    </div>
  );
}
