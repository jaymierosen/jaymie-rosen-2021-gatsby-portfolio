import * as React from "react";
import PropTypes from "prop-types";
// import { Link } from "gatsby";

// Components
import JaymieSvg from "../components/jaymieSvg";

const Header = ({ siteTitle }) => (
  <header>
    <h1 className="logo">JR</h1>
    <h2>Jaymie Rosen</h2>
    <h3>Front-End Developer</h3>
    <nav>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/jaymierosen/" target="_blank" rel="noreferrer">
            Linkedin
          </a>
        </li>
        <li>
          <a href="https://github.com/jaymierosen" target="_blank" rel="noreferrer">
            Github
          </a>
        </li>
        <li>
          <a href="mailto:hello@jaymierosen">hello [at] jaymierosen.com</a>
        </li>
      </ul>
    </nav>
    <JaymieSvg />
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
