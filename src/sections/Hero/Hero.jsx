import React from 'react'
import './HeroStyle.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import leetcodeLight from '../../assets/leetcode-light.svg'
import leetcodeDark from '../../assets/leetcode-dark.png'
import CV from '../../assets/NewResume.pdf'
import { useTheme } from '../../common/ThemeContext'

const Hero = () => {
  
  const {theme,toggleTheme} = useTheme();
  const themeIcon = theme === 'light' ? sun : moon ;
  const githubIcon = theme === 'light' ? githubLight : githubDark ;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark ;
  const leetcodeIcon = theme === 'light' ? leetcodeLight : leetcodeDark;

  return (
    <section id='hero' className='container'>
        <div className='colorModeContainer'>
            <img className='hero' src={heroImg} alt="Profile Pic" />
            <img className='colorMode' src={themeIcon} alt="Color Mode Icon" 
             onClick={toggleTheme}
            />
        </div>
        <div className='info'>
            <h1>Amit <br /> Budhodkar</h1>
            <h2>Frontend Developer</h2>
            <span>
                <a href="https://github.com/amit1725" target='_blank'>
                    <img src={githubIcon} alt="" />
                </a>
                <a href="https://linkedin.com/in/amit-budhodkar-854154240" target='_blank'>
                    <img src={linkedinIcon} alt="" />
                </a>
                <a href="https://leetcode.com/u/amit_8877" target='_blank'>
                    <img src={leetcodeIcon} alt="" />
                </a>
            </span>
            <p className='description'>
                Passionate and dedicated candidate with professional qualification in IT, seeking an opportunity to work with a growth-
                oriented organization on a real time software development project.
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
