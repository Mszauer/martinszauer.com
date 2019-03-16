import React from 'react'
import Link from './link'

const Banner = () => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1 className="h1">Hi, my name is Martin</h1>
            </header>
            <div className="content">
                <p>Self-Taught Developer, Powerlifter, Lifelong Learner</p>
                <p>"It’s all just talk until it ships."</p>
                <ul className="actions">
                    <li><Link to="_blank" className="button next scrolly">View Resume</Link></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner