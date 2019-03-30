import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import About from '../components/About'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Martin Szauer"
                    meta={[
                        { name: 'description', content: 'Martin Szauer - Software Developer, Powerlifter, Lifelong Learner' },
                        { name: 'keywords', content: 'martin, szauer, mszauer, software, developer, engineer, web' },
                    ]}
                >
                </Helmet>

                <Banner />
                <About />

            </Layout>
        )
    }
}

export default HomeIndex