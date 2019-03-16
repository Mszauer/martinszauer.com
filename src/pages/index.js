import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Banner from '../components/banner';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `portfolio`, `web developer`, `mszauer`, `martin`, `szauer`, `software`, `developer`]} />
    <Banner />
  </Layout>
)

export default IndexPage
