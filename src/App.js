import React, { Component } from 'react';

import self from './assets/self.jpg';
import water from './assets/bgwater.webp';

// case studies
import caseStudy from './assets/drdelicacy.png';
import caseStudy2 from './assets/markowitz-services.gif';
import caseStudy3 from './assets/trucke.png';

// social icons
import tw from './assets/icons/twitter.png';
import li from './assets/icons/linkedin.png';
import pin from './assets/icons/pinterest.png';
import tum from './assets/icons/tumblr.png';
import insta from './assets/icons/instagram.png';
import git from './assets/icons/github.png';

import Fade from 'react-reveal/Fade';
import Footer from './components/footer';

// styles
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style/App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid App">

      <nav className="navbar navbar-dark">
        <a className="navbar-brand" href="/">LG</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
          <Fade top delay={400} duration={1200}>
            <li className="nav-item active">
              <a className="nav-link" href="http://linkedin.com/in/leonelaguzman/" target="_blank">CV</a>
            </li>
          </Fade>
          <Fade top delay={440} duration={1200}>
            <li className="nav-item">
              <a className="nav-link" href="mailto:leonelaguzman1@gmail.com?subject=Let's talk.">Let's Email</a>
            </li>
          </Fade>
          <Fade top delay={480} duration={1200}>
            <li className="nav-item">
              <a className="nav-link" href="sms:3372400858">Text Me</a>
            </li>
          </Fade>

            <div className="mobile-social">
                <Fade top delay={500} duration={2000}>
              <a href="http://linkedin.com/in/leonelaguzman/" target="_blank"><span>
                <img src={li} alt=""/></span></a>
                </Fade>
                <Fade top delay={560} duration={2000}>
                <a href="http://github.com/leonel-ai/" target="_blank"><span>
                <img src={git} alt=""/></span></a>
                </Fade>
                <Fade top delay={680} duration={2000}>
              <a href="https://www.pinterest.com/leonel_ai/ux-ui/" target="_blank"><span>
                <img src={pin} alt=""/></span></a>
                </Fade>
                <Fade top delay={620} duration={2000}>
              <a href="http://twitter.com/leonel_ai/" target="_blank"><span>
                <img src={tw} alt=""/></span></a>
                </Fade>
                <Fade top delay={800} duration={2000}>
              <a href="http://instagram.com/leonel.ai/" target="_blank"><span>
                <img src={insta} alt=""/></span></a>
                </Fade>
            </div>
          </ul>
        </div>
      </nav>


        <header className="row page-header">
        <Fade bottom delay={400}>
          <div className="col-xs-2 col-md-2 offset-md-1 col-xl-1" id="tab">
            Perfil
          </div>
        </Fade>

          <div className="col-md-6 page-headline">
          <Fade bottom delay={500}>
            <h1 className="page-title">Leonela Guzmán</h1>
            <h1 className="page-subtitle">Design + Development</h1>
          </Fade>
          </div>
        </header>

        <div className="row profile">
        <Fade bottom delay={500} duration={1300}>
          <div className="col-xs-2 col-md-7 backdrop-profile">
            <img src={water} alt="" className="img-fluid rounded"/>
          </div>
        </Fade>
        <Fade bottom delay={500} duration={2000}>
          <div className="col-xs-6 col-md-7 offset-md-4 offset-xl-3 backdrop-image">
            <img src={self} alt="" className="img-fluid rounded self"/>
          </div>
        </Fade>
        </div>


        <div className="row about">
        <Fade bottom delay={500} duration={1800}>
          <div className="col-xs-2 col-md-2 offset-md-1" id="tab">
            Sobre Mí
          </div>
        </Fade>

        <Fade bottom delay={500} duration={1800}>
          <div className="col-md-5 about-text">
            <p className="about-me">I'm a web and interaction developer turning ambitious ideas into user-friendly solutions.
            Working with clients — large or small, near and far — I design exceptional brands and compelling web experiences.</p>
            <p className="about-me">Let's work together.</p>
            <a href="mailto:leonelaguzman1@gmail.com?subject=Let's talk.">
            <button type="button" className="btn btn-primary">
            Get to know me
            </button></a>
          </div>
        </Fade>
        </div>

        <div className="row services">
        <Fade bottom delay={200}>
          <div className="col-xs-2 col-md-2 offset-md-1" id="tab">
            Servicios
          </div>
        </Fade>

         <div className="col-md-6 col-xl-8">
         <Fade bottom delay={500} duration={1300}>
            <h1>The Process</h1>
            <p className="service-details">Forget templates or pre-designed UI kits. I research, design, and develop
            solutions tailored to each of my client's needs.<br/><br/>Expect transparent, honest and professional communication.
            Working with me cuts out the middlemen. You'll be talking directly to the strategist, the creator, and the partner invested in the success of your business.
            </p>

            <div className="col-md-12">
              <div className="row justify-content-end service-items">
                <div className="col-md-3">
                  <h3>Design</h3>
                  <p className="service-item">UX / UI Design<br/>Responsive Web Design<br/>Mobile App Design<br/>Print Design</p>
                </div>
                <div className="col-md-4">
                  <h3>Development</h3>
                  <p className="service-item">HTML / CSS, JS, Jquery, C++<br/>Client and Server-Side Scripting<br/>CMS and Cloud Services Platforms<br/>SEO and Bandwidth Optimization</p>
                </div>
                <div className="col-md-4">
                  <h3>Strategy</h3>
                  <p className="service-item">Art Direction<br/>User Research<br/>Branding and Identity<br/>Digital Marketing and Copy</p>
                </div>
              </div>
            </div>
            <a href="mailto:leonelaguzman1@gmail.com?subject=Let's talk.">
            <button type="button" className="btn btn-primary">
            Let's get started</button></a>
          </Fade>
          </div>

        <Fade bottom delay={200}>
          <div className="col-xs-2 col-md-2 offset-md-1 tab-p" id="tab">
            Proyectos
          </div>
        </Fade>

          <div className="col-md-6 col-xl-8 work">
          <Fade bottom delay={500}>
            <h1>The Work</h1>
            <p className="project-details">Meaningful work, that aligns with and provides value to the consumer, isn't a fever dream. It's the new world.
            <br/><br/>I see brands continually challenged by a changing digital landscape,
            struggling to play catch-up instead of looking inward to meet the needs of their clients in a truly
            innovative way, ahead of the latest trend or buzzword. It's my personal mission to help you sidestep the noise and connect with people meaningfully.</p>
            <h3>Industry Experience</h3>
            <p className="project-xp">Art / Architecture / B2B+B2C / Fashion / Film /
            Food / Lifestyle / Music / News / Photography / Radio / Travel / Law / Tech / Apps</p>
          </Fade>
          </div>

            <div className="col-md-12 case1">
              <div className="row">
                <div className="col-md-6 case1-img">
                  <img src={caseStudy} alt="" className="img-fluid rounded"/>
                </div>
                <div className="col-md-6 case1-col">
                  <h5 className="client">CLIENT</h5>
                    <p>DR Delicacy</p><br/>
                  <h5 className="client">STRATEGY</h5>
                    <p>Built a new brand and minimalist landing page designed to convert B2B and Wholesale. Inspired by
                      the truffle hunting expeditions in France and the owner's expertise and personal history with the product,
                      I crafted a simple story that emphasized the natural products, in a playful, modern take of traditional field guides.</p><br/>
                  <h5 className="client">TASKS</h5>
                    <p>Art Direction<br/>Product Shoot<br/>Branding and Identity<br/>Responsive Web / UI Design</p>
                </div>
              </div>
            </div>

            <div className="col-md-12 case2">
              <div className="row">
                <div className="col-md-6 col-xl-7 case2-col order-12 order-md-first">
                  <h5 className="client">CLIENT</h5>
                    <p>Markowitz Law</p><br/>
                  <h5 className="client">STRATEGY</h5>
                    <p>Built a new, responsive website paired with a full rebrand and billboard campaign launch. Inspired by the no-nonsense
                      nature of the Markowitz team and the familiar design elements of a traffic-ridden city, I introduced a site
                      tailored to help solve the user's legal needs in a professional, efficient and interactive way, and matched the modern push
                      they've taken with the latest legal software.<br/>
                      <br/>Going beyond design, I helped integrate their website to the
                      <a href="https://www.clio.com/" target="_blank"> Clio</a> platform, customized
                      the software to their administrative needs, and personally trained their team members on the ins and outs.</p><br/>
                  <h5 className="client">TASKS</h5>
                    <p>Art Direction<br/>UX / UI Design<br/>Cloud-Based Software Integration<br/>Branding and Identity<br/>Responsive Web Design</p>
                </div>
                <div className="col-md-6 col-xl-5 case2-img">
                  <img src={caseStudy2} alt="" className="img-fluid rounded"/>
                </div>
              </div>
            </div>

            <div className="col-md-12 case3">
              <div className="row">
                <div className="col-md-6 case3-img">
                  <img src={caseStudy3} alt="" className="img-fluid rounded"/>
                </div>
                <div className="col-md-6 case3-col">
                  <h5 className="client">CLIENT</h5>
                    <p>Trucke</p><br/>
                  <h5 className="client">STRATEGY</h5>
                    <p>Built the backend to the One of a small team of developers that created location-based, on-demand service mobile apps. Agile SDLC.<br/><br/>
                    Resources: Node, Express, Mocha, mySQL, React, Git, Amazon Web Services, Stripe API, JIRA</p><br/>
                  <h5 className="client">TASKS</h5>
                    <p>Back-End Development<br/>Amazon Web Services, Git, JIRA<br/>Stripe Payment Processing<br/>Express Routing and API Calls<br/>Business Logic and CRM Database Design</p>
                </div>
              </div>
            </div>


        </div>

      <div className="row footer">
        <Fade bottom delay={200}>
          <div className="col-xs-2 col-md-2 offset-md-1" id="tab">
            Contacto
          </div>
        </Fade>

        <div className="col-md-6">
          <Fade bottom delay={500}>
            <h1>The Next Step</h1>
            <p className="contact-details">Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Quibusdam repellat vel voluptas totam dignissimos optio ut pariatur,
            laboriosam, veritatis est ab! Harum quos voluptatum optio, sequi nisi aliquid
            voluptatem consectetur.</p>
            <a href="mailto:leonelaguzman1@gmail.com?subject=Let's talk.">
            <button type="button" className="btn btn-primary">
            Vámonos</button></a>
          </Fade>
        </div>
      </div>

      <Footer/>
      </div>
    );
  }
}

export default App;
