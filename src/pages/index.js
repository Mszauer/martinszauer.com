import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `florida`, `bodybuilding`]} />
    <p>Hello World!</p>
  </Layout>
)

export default IndexPage
