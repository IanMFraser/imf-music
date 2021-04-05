import React from 'react';
import styles from './Contact.module.css'

const Contact = () => {
    return(
        <div className={styles.contact}>
            <div className={styles.contactAbout}>
                <figure className={styles.contactImage}>
                    <img src="https://storage.googleapis.com/album-images/IanFraser_TransPecos-20150805-04317.jpeg" alt="imf performing at trans pecos"></img>
                    <figcaption><span className={styles.photoCredit}>Photo by Billy Gomberg</span></figcaption>
                </figure>
                <p className={styles.contactBio}>
                    Ian M Fraser (b. 1980) is a composer working in the field of computer music. His work primarily focuses on generative structures, stochastic processes, and nonlinear feedback systems.
                    He lives in New York City with his wife and cat.
                </p>
            </div>
            <div className={styles.contactEmail}> 
                <p>Contact me at: <a href="mailto:imf@ianmfraser.computer">imf@ianmfraser.computer</a></p>
            </div>
        </div>
    )
}

export default Contact