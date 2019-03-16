import React from 'react'
import Link from './link'

const About = () => (
    <section id="about" className="major">
        <div className="inner">
            <header className="major">
                <h1 className="h1">About Me</h1>
            </header>
            <div className="content">
                <p>TLDR Version: Resume / CV</p>
                <p>I'm driven by learning the "why" behind the "how". Natural curiosity drives me and programming allows me to satisfy these curiosities.</p>
                <p>My formal education is in Business Management and Leadership, but during my senior year I found a deep passion for programming. I put a great focus on group dynamics and communication, what I consider  two of lifes most vital skills. Through software development I find joy in taking ideas from an idea to production, being able deliver a usable product to the stakeholders and brings value to the end users.</p>
                <p>For everything else, you can reach me at dev@martinszauer.com</p>
                <ul className="actions">
                    <li><Link to="_blank" className="button next scrolly">View Resume</Link></li>
                </ul>
            </div>
        </div>
    </section>
)

export default About