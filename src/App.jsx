import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import {useState} from 'react'


const App = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <>
            <Header activeNav={activeNav} setActiveNav={setActiveNav}/>
            <Nav activeNav={activeNav} setActiveNav={setActiveNav}/>
            <About activeNav={activeNav} setActiveNav={setActiveNav}/>
            <Experience />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}

export default App