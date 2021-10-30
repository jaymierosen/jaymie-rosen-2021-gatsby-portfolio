import * as React from "react"
import PropTypes from "prop-types"
// import { Link } from "gatsby";
import hero from '../images/hero.jpg';
import downloadFile from '../assets/jaymie-rosen-resume.pdf';
// Components

const Header = ({ siteTitle }) => (
  <>
    <header>
      <img alt="Laptop with stickers on it" className="hero" src={hero} />
      <h1>Jaymie Rosen</h1>
      <h2>Front-End Developer</h2>
      <h3>New website coming soon</h3>
    </header>
    <nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/jaymierosen/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/jaymierosen/"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a href="mailto:hello@jaymierosen">hello [at] jaymierosen.com</a>
        </li>
        <li>
          <a href={downloadFile} target="_blank" rel="noreferrer" download>
            <button>Download my resume</button>
          </a>
        </li>
      </ul>
    </nav>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "Jaymie Rosen",
}

export default Header
