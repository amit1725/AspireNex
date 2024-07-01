import React from 'react'
import './SkillsStyles.css'
import checkDark from '../../assets/checkmark-dark.svg'
import checkLight from '../../assets/checkmark-light.svg'
import SkillList from '../../common/SkillList'
import { useTheme } from '../../common/ThemeContext'

const Skills = () => {
  const {theme,toggleTheme} = useTheme();
  const check = theme === 'light' ? checkLight : checkDark;
  return (
    <section id='skills' className='skill-container'>
        <h1 className='sectionTitle'>Skills</h1>
        <div className='skillList'>
            <SkillList src={check} skill="HTML"/>
            <SkillList src={check} skill="CSS"/>
            <SkillList src={check} skill="Javascript"/>
            <SkillList src={check} skill="TailwindCss"/>
            <SkillList src={check} skill="ReactJs"/>
        </div>
        <hr />
        <div className='skillList'>
            <SkillList src={check} skill="NodeJs"/>
            <SkillList src={check} skill="ExpressJs"/>
            <SkillList src={check} skill="Postman"/>
            <SkillList src={check} skill="MongoDB"/>
        </div>
        <hr />
        <div className='skillList'>
            <SkillList src={check} skill="C++"/>
            <SkillList src={check} skill="DSA"/>
            <SkillList src={check} skill="MySql"/>
            <SkillList src={check} skill="Github"/>
        </div>
    </section>
  )
}

export default Skills
