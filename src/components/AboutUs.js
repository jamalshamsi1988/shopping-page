import React from 'react';

//image
import personal from '../assets/image/JamalShamsi.jpg';
//icons
import github from '../assets/icons/github.svg';
import linkedin from '../assets/icons/linkedin.svg';
//Css
import styles from './AboutUs.module.css'

const githubLink="https://github.com/jamalshamsi1988";
const linkedinLink="https://www.linkedin.com/in/jamal-shamsi-86553a225/";

const AboutUs = () => {
  return (
    <div  className={styles.container}>
      <img className={styles.image} src={personal} alt="My Foto" />
        <div className={styles.textContainer}>
            <h1>Jamal Shamsi</h1>
                <h3 >
                  Interested in Web Development, especially enjoys working with teams.
                    wants to learn new things about Web and it's around. Always have an energetic personality in work.
                 </h3>
                 <a  href={githubLink}><img  src={github} alt="github" /></a>
                 <a href={linkedinLink}><img src={linkedin} alt="linkedin"/></a>
          </div>

    </div>
  )
}

export default AboutUs
