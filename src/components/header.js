import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

// Components
import JaymieSvg from "../components/jaymieSvg";

const Header = ({ siteTitle }) => (
  <header>
    <h1 className="cursive">JR</h1>
    <nav>
      <ul>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/jaymierosen/">
            linkedin
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/jaymierosen">
            github
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
