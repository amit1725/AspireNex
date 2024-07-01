import React from 'react'
import './ProjectsStyles.css'
import streamflixLight from '../../assets/viberr.png'
import ProjectCard from '../../common/ProjectCard'
import tribifyDark from '../../assets/logo-png.png'
import tribifyLight from '../../assets/logo-png-light.png'
import razorpayDark from '../../assets/razorpay-logo.png'
import razorpayLight from '../../assets/razorpay-dark.jpg'
import blogLight from '../../assets/blog.png'
import blogDark from '../../assets/blog-dark.png'
import streamflixDark from '../../assets/viberr-dark.png'
import { useTheme } from '../../common/ThemeContext'


const Projects = () => {
  const {theme,toggleTheme} = useTheme();
  const blog = theme === 'light' ? blogDark : blogLight ;
  const tribify= theme === 'light' ? tribifyLight : tribifyDark;
  const razorpay= theme === 'light' ? razorpayLight : razorpayDark;
  const streamflix= theme === 'light' ? streamflixDark : streamflixLight;
  

  return (
    <section id='projects' className='projects-container'>
        <h1 className='sectionTitle'>Projects</h1>
        <div className='projects-container-inner'>
            <ProjectCard 
              src={streamflix}
              link="https://github.com/amit1725/StreamFlix.git"
              h3="StreamFlix"
              p="Streaming App"
            />
            <ProjectCard 
              src={tribify}
              link="https://github.com/amit1725/Ecommerce-react.git"
              h3="Tribify"
              p="Ecommerce App"
            />
            <ProjectCard 
              src={razorpay}
              link="https://github.com/amit1725/razorpay-clone.git"
              h3="Razorpay Clone"
              p="UI clone"
            />
            <ProjectCard 
              src={blog}
              link="https://github.com/amit1725/blog-website.git"
              h3="Blog"
              p="Blog Website"
            />
        </div>
    </section>
  )
}

export default Projects
