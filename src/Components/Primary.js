import React, { Component } from 'react';
import Badge from 'react-bootstrap/Badge';
import './style/index.scss'
import { Container, Row, Image, Col, ListGroup } from 'react-bootstrap';
import logo from './logo.png'

class Primary extends Component {
    render() {
        return (
            <div>
                <h1 className='main_text'>
                    rus <Badge bg="secondary">ІПСО</Badge>
                </h1>
                <Container className='main_container'>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src={logo} rounded className='logo' />
                        </Col>
                        <Col>
                            <h1 className='head_text'>Головна мета веб-порталу</h1>
                            <ListGroup as="ol" numbered className='text_info'>
                                <ListGroup.Item as="li" className='text_info_row'>Забезпечення актуальної та достовірної інформації про дії та події, пов'язані з російським ІПСО.
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className='text_info_row'>Забезпечення об'єктивної та збалансованої інформації, яка відображає різні точки зору та контекст подій. Це сприяє створенню об'єктивного уявлення про дії російського ІПСО.
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className='text_info_row'>Надання короткої інформації про діяльність українського ІПСО, щоб користувачі могли отримати порівняльний аналіз між російським та українським підрозділами.
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className='text_info_row'>Представлення інформації у різних форматах, таких як тексти, фотографії, відео та графіки, для забезпечення різноманітності та зрозумілості матеріалів.
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Primary;