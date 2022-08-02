import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = (props) =>{
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className="about__me-image">
                        <img src={ME} alt='An image of me in About section' />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icon'/>
                            <h5>Clients</h5>
                            <small>300+ Clients Worldwide</small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon'/>
                            <h5>Projects</h5>
                            <small>80+ Completed Projects</small>
                        </article>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, repellat error minima sit accusamus laboriosam quaerat voluptatem quis reprehenderit fugiat ex dolorem eligendi delectus ratione hic iure necessitatibus recusandae at.
                    </p>
                    <div className="about__content-button">
                        <a href='#contact' onClick={() => props.setActiveNav('#contact')} className='btn btn-primary'>Let's Talk!</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About