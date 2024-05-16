import React, { Suspense } from 'react'
import styles from './HeroStyles.module.css'
import heroImg from '../../assets/profile_picture.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import CV from '../../assets/Chris Lantigua - CV.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    

    return (
        <section id='hero' className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.hero} src={heroImg} alt="Profile picture of Chris Lantigua" />
                <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme}/>
            </div>
            <div className={styles.info}>
                <h1>
                    Chris
                    <br/>
                    Lantigua
                </h1>
                <h2>
                    FullStack Developer
                </h2>
                <span>
                    <a href="https://www.linkedin.com/in/chris-lantigua-1285a2289" target='_blank'>
                        <img src={linkedinIcon} alt="LinkedIn icon" />
                    </a>
                    <a href="https://github.com/Caspian01" target='_blank'>
                        <img src={githubIcon} alt="Github icon" />
                    </a>
                </span>
                <p className={styles.description}>
                A relentless explorer in the world of computer science. From frontend elegance to backend mastery, I thrive on the quest for knowledge, shaping innovative solutions that redefine possibility.
                </p>
                <a href={CV} download>
                    <button className='hover'>
                        Resume
                    </button>
                </a>
            </div>
        </section>
    )
}

export default Hero