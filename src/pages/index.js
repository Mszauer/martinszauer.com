import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Banner from '../components/banner';
import About from '../components/about';
import Skills from '../components/skills';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `portfolio`, `web developer`, `mszauer`, `martin`, `szauer`, `software`, `developer`]} />
    <Banner />
    <div id="main">
      <Skills />
      <About />
    </div>
  </Layout>
)

export default IndexPage
