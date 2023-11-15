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
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collapse id='responsive-navbar-nav' className='d-flex align-items-center justify-content-between'>
                            <Nav className="mr-auto">
                                <Nav.Link href="/news" className='text-dark' activeClassName="active_link"> Новини </Nav.Link>
                                <Nav.Link href="/about" className='text-dark' activeClassName="active_link"> Про ІПсО України </Nav.Link>
                            </Nav>
                            <Form>
                                <img className='social_img'
                                    src={inst}
                                    height="25"
                                    width="25"
                                    alt="inst"
                                />
                                <img className='social_img'
                                    src={facebook}
                                    height="25"
                                    width="25"
                                    alt="facebook"
                                />
                                <img className='social_img'
                                    src={twit}
                                    height="25"
                                    width="25"
                                    alt="twit"
                                />
                                <img className='social_img'
                                    src={youtube}
                                    height="30"
                                    width="30"
                                    alt="youtube"
                                />
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Routes>
                        <Route exact path="/" element={<Main />} />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/news" element={<News />} />
                        <Route exact path="/select_news" element={<SelectNews />} />
                    </Routes>
                </Router>
            </div>
        );
    }
}

export default Header;