import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";

import downloadFile from '../assets/Resume_JaymieRosen_2021.pdf';

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
              I'm Jaymie, and I'm currently looking for my next front-end or full-stack web development role.
            </p>
            <p>As you take a look at my work experience, I want to be fully candid about myself for a moment. 2020 was a very tough year to say the least. In the past year and a half or so, I've thought about my career and future. They felt stagnant. I had imagined that spending more time at home would spark creativity...a spark to learn and gain new skills. In all honesty, the overwhelming feeling of uncertainty lead to a lack to motivation, desire, and confidence to learn. Though, underneath the self-doubt, I had, and have always had, the drive to progress as a developer.</p>
            <p>With the world slowly going back to normal, I firmly decided that the summer of 2021 was going to be a period in which to fully commit myself to learning as much as I can &mdash; mainly, to further advance my JavaScript skills. In the past few years working as a developer, I've purchased <em>many</em> tutorials, classes, etc. that have gone...mostly unused. If I ever did complete a tutorial, I always had trouble applying those concepts learned elsewhere. I've found that the best way for me to learn is to, well, build projects myself! I've always had a list of projects I wanted to build ever since I started working as a developer. They never got made because I was too self-conscious of my skillset. And because of this, it was challenging for me to land roles focused more on JavaScript. My hope is that most, if not all, of these projects will come to fruition, by decicating myself to putting in the work. My sincere hope is that by focusing on putting in the hard work, I will be able to see my career as a developer flourish.</p>
            <p>More projects will be continiously added to this website. I hope you enjoy what you see so far! Feel free to check out my <a href="https://github.com/jaymierosen" target="_blank" rel="noreferrer"><strong>Github profile</strong></a> in the meantime. I've also included a button below to download my resume. Thank you for taking the time to read this.</p>
            <a href={downloadFile} target="_blank" rel="noreferrer" download>
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
          <footer><p>&copy; {new Date().getFullYear()} | Built with Gatsby</p></footer>
        </div>
      </main>
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
