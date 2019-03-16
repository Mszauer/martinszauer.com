import React, { useRef, useState } from 'react'
import Img from 'gatsby-image'
import { Container } from 'reactstrap'
import { Dialog } from '@reach/dialog'
import '@reach/dialog/styles.css'
import lightboxStyles from './lightbox.module.css'
import useOnClickOutside from '../utils/useOnClickOutside';

const LightboxContainer = ({ images, year }) => {
    const ref = useRef()
    const [isModalOpen, setModalOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)

    useOnClickOutside(ref, () => setModalOpen(false))

    return (
        <Container>
            <h3 className={`h3 uppercase underline`}>{year} Gallery</h3>
            <section className={`${lightboxStyles.lightboxContainer}`}>
                {
                    images.map(image => (
                        <button className={`${lightboxStyles.imageButton}`}
                            key={image.node.childImageSharp.fluid.src}
                            onClick={() => { setSelectedImage(image); setModalOpen(true); }}
                        >
                            <Img fluid={image.node.childImageSharp.fluid} />
                        </button>
                    ))
                }
            </section>
            {
                isModalOpen && (
                    <Dialog>
                        <Img
                            ref={ref}
                            fluid={selectedImage.node.childImageSharp.fluid}
                        />
                    </Dialog>
                )
            }
        </Container>
    )
}

export default LightboxContainer