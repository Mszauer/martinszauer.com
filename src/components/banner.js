import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Banner = () => {
    const data = useStaticQuery(graphql`{
        allFile(filter: {extension: {eq: "pdf"}}) {
            edges {
                node {
                    publicURL
                }
            }
        }
    }`)
    const resumeURL = data.allFile.edges[0].node.publicURL
    return (
        <section id="banner" className="major">
            <div className="inner">
                <header className="major">
                    <h1 className="h1">Hi, my name is Martin</h1>
                </header>
                <div className="content">
                    <p>Self-Taught Developer, Powerlifter, Lifelong Learner</p>
                    <p>"It’s all just talk until it ships."</p>
                    <ul className="actions">
                        <li><a href={resumeURL} className="button next scrolly" target="_blank" rel="noopener noreferrer">View Resume</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Banner