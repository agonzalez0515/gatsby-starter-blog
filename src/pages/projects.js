import React from "react"
import { graphql, StaticQuery} from "gatsby";
// import Image from "gatsby-image"
import SEO from '../components/seo'

class Projects extends React.Component {
  render() {
    return (
      <>
        <SEO title='Projects' />
        <p>Udacity PWA</p>
        <p>Natalia</p>
        <p>Github Bot</p>
      </>
    )
  }
}

export default Projects