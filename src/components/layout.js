import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Header from "./header";
import Footer from './footer';
import "../assets/allStyles.css"

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
    <div style={{position: 'relative'}}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main style={{ position: 'relative' }}>
        <div className="bg-container">
          {children}
        </div>
        <div className="tri" />
      </main>
      {/*}<Parallax
        y={[-60, 165]}
        styleOuter={{ position: 'relative', zIndex: '1' }}
      >*/}
        <Footer />
    </div>
  )
}

export default Layout
