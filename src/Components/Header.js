import React, { Component } from 'react';
import { Nav, Container, Form, Navbar } from 'react-bootstrap';
import logo from './logo.png'
import inst from './instagram.svg'
import facebook from './facebook.svg'
import twit from './twitter.svg'
import youtube from './youtube.svg'

import './style/index.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Main from '../Pages/Main.js';
import About from '../Pages/About.js';
import News from '../Pages/News.js';
import SelectNews from '../Pages/SelectNews';
import Contacts from '../Pages/Contacts.js';




class Header extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="md" bg='secondary' variant='dark'>
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="50"
                                width="40"
                                className="d-inline-block align-top"
                                alt="logo"
                            />
                        </Navbar.Brand>
                        <span className='ipso_text'>rusІПСО</span>
                        <Navbar.Collapse id='responsive-navbar-nav' className='d-flex align-items-center justify-content-between'>
                            <Nav className="mr-auto">
                                <Nav.Link href="/news" className='text-dark'> Новини </Nav.Link>
                                <Nav.Link href="/about" className='text-dark'> Про ІПсО України </Nav.Link>
                                <Nav.Link href="/contacts" className='text-dark'> Контакти </Nav.Link>
                            </Nav>
                            <Form>
                                <a href="https://www.instagram.com/sof_ua/" target="_blank" rel="noopener noreferrer">
                                    <img className='social_img' src={inst} height="25" width="25" alt="inst" />
                                </a>
                                <a href="https://www.facebook.com/usofcom/?locale=uk_UA" target="_blank" rel="noopener noreferrer">
                                    <img className='social_img' src={facebook} height="25" width="25" alt="facebook" />
                                </a>
                                <a href="https://twitter.com/DefenceU/status/1497127914483204096" target="_blank" rel="noopener noreferrer">
                                    <img className='social_img' src={twit} height="25" width="25" alt="twit" />
                                </a>
                                <a href="https://www.youtube.com/@sof_ua" target="_blank" rel="noopener noreferrer">
                                    <img className='social_img' src={youtube} height="30" width="30" alt="youtube" />
                                </a>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Routes>
                        <Route exact path="/" element={<Main />} />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/news" element={<News />} />
                        <Route exact path="/contacts" element={<Contacts/>} />
                        <Route exact path="/select_news/:id" element={<SelectNews />} />
                    </Routes>
                </Router>
            </div>
        );
    }
}

export default Header;