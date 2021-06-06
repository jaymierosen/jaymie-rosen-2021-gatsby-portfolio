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
  `)

  return (
    <>
      <main className="wrapper">
        <div className="grid--layout">
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          <section className="about">
            <h2 className="content__title">new website</h2>
            <h3 className="content__desc">coming soon</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum obcaecati impedit corrupti iure illo veniam
              reprehenderit rem sint ab rerum! Minus distinctio asperiores
              aliquam laborum quia temporibus reprehenderit fuga blanditiis.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum obcaecati impedit corrupti iure illo veniam
              reprehenderit rem sint ab rerum! Minus distinctio asperiores
              aliquam laborum quia temporibus reprehenderit fuga blanditiis.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum obcaecati impedit corrupti iure illo veniam
              reprehenderit rem sint ab rerum! Minus distinctio asperiores
              aliquam laborum quia temporibus reprehenderit fuga blanditiis.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum obcaecati impedit corrupti iure illo veniam
              reprehenderit rem sint ab rerum! Minus distinctio asperiores
              aliquam laborum quia temporibus reprehenderit fuga blanditiis.
            </p>
          </section>
          <h2 className="projects--heading">projects</h2>
          <section className="projects--section">
            <section className="project project--one">
              <h3 className="content__title">
                pantone<sup>&reg;</sup> color of the year
              </h3>
              <h4 className="content__desc">react</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                quasi minus, aperiam aliquam nihil doloribus pariatur quam
                temporibus.
              </p>
              <a href="#" target="_blank">
                link to project
              </a>
            </section>
            <section className="project project--two">
              <h2>more to come...</h2>
            </section>
          </section>
          <footer>&copy; {new Date().getFullYear()}</footer>
        </div>
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
