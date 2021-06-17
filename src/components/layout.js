import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <main className="wrapper">
        <div className="grid--layout">
          <Header siteTitle={data.site.siteMetadata?.title || `Jaymie Rosen`} />
          <section className="about">
            <h2>Hello, there!</h2>
            <p>
              I'm Jaymie, and I'm currently looking for my next front-end or full-stack web development role.
            </p>
            <a href="https://drive.google.com/file/d/1iNO5Oqh1VPwaWzh5ZJQi2hdB03VE6Ckz/view?usp=sharing" target="_blank" rel="noreferrer">
              <button>Download my resume</button>
            </a>
          </section>
          <section className="projects--section">
            <h2 className="projects--heading">Projects</h2>
            <section className="project project--one">
              <h3 className="content__title">
                Pantone<sup className="content__title--sup">&reg;</sup> Color of the Year
              </h3>
              <h4 className="content__desc">Built with React</h4>
              <p>
                An interactive retrospective of each Pantone<sup>&reg;</sup> Color of the Year, from 2000 to 2021.
              </p>
              <a href="https://pantonecolors.netlify.app/" target="_blank" rel="noreferrer">
                <button>Click here to view project</button>
              </a>
            </section>
          </section>
          <footer>&copy; {new Date().getFullYear()} | Built with Gatsby</footer>
        </div>
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
