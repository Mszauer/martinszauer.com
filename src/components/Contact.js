import React from 'react'
import '../assets/images/qrcode.png'

const Contact = () => {
    const contactEmail = "dev@martinszauer.com"

    return (
        <section id="contact">
            <div className="grid-wrapper">
                <div className="col-4">
                    {/* import qrcode here? */}
                </div>
                <div className="contact-method col-2">
                    <span className="icon alt fa-envelope"></span>
                    <span>{contactEmail}</span>
                </div>
                <div className="contact-method col-2">
                    <span className="icon alt fa-phone"></span>
                    <a href="tel:4152408954">(415)249-8954</a>
                </div>
                <div className="contact-method col-2">
                    <span className="icon alt fa-linkedin"></span>
                    <a href="https://www.linkedin.com/in/mszauer/">/in/mszauer</a>
                </div>
                <div className="contact-method col-2">
                    <span className="icon alt fa-github"></span>
                    <a href="https://github.com/Mszauer/">/Mszauer</a>
                </div>
            </div>

        </section>
    )
}

export default Contact
