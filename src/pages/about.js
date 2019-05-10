import React from "react"
import { graphql, StaticQuery} from "gatsby";
// import Image from "gatsby-image"
import SEO from '../components/seo'



class AboutMe extends React.Component {
  render () {
    return (
      <React.Fragment>
        <SEO title="About" />
        <div>
          <h2>Hi!</h2>
          <p>
            I'm a Front End Developer working on growing my skills everyday. I love learning, researching, and that feeling when things click.
            Currenty I work with React, and I'm interested in and learning about accessibility, Progressive Web Apps, and the jam stack (this site is built with Gatsby!).
            </p>
            <p>
            I have a Bachelors of Arts from UC Berkeley in Sociology and Gender & Women's Studies. In 2016, I attended Dev Bootcamp in San Francisco to pursue a developer career. After bootcamp,
            I first worked as a QA Engineer and then made the transition to Front End Developer.
            Before that, I ran a small embroidery and screen printing business.
          </p>
          <p>
            Experience/knowledge in: react, gatsby, vanilla js, semantic html, responsive layouts, Progressive Web Apps, Gulp/Webpack, CSS, SCSS, CSS modules, ruby, rails
          </p>
        </div>
      </React.Fragment>
    )
  }
}

function About() {
  return (
    <StaticQuery 
      query={aboutQuery}
      render={data => (<AboutMe data={data} />)}
    />
  )
}

const aboutQuery = graphql`
  query AboutQuery {
    wiz: file(absolutePath: {regex: "/wizWorld.jpg/"}) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default About

