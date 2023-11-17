import React from 'react';
import './style/index.scss'
import { Container, Row, Image, Col } from 'react-bootstrap';
import support from "../assets/support_me.jpeg"

function GoogleMapComponent() {

    return (
        <div>
            <Container className='main_container'>
                <Row>
                    <Col xs={4} md={6} className='map_col'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1270.7946544322554!2d30.54143228870887!3d50.430123015192386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf0eaf9b0cc1%3A0xd15c26c6138c2fa1!2z0JLQtdCxINGB0YLRg9C00ZbRjyBUaGUgV2Vi!5e0!3m2!1suk!2sua!4v1700252477206!5m2!1suk!2sua" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Col>
                    <Col>
                        <h1 className='head_text'>Контакти</h1>
                        <h3 >Адреса:</h3>
                        <h5>м. Київ, вул. Старонаводницька, буд 45/1</h5>
                        <h3 className='contact_margin'>Контактний телефон:</h3>
                        <h5>+380983412496</h5>
                        <div className='support_div'>
                            <h3 className='support_text'>Підтримати проєкт:</h3>
                            <Image src={support} height="250px" width="250px"></Image>
                        </div>
                    </Col>
                </Row>
            </Container>
            <footer className='footer_fix'>© 2023 rusІПСО. Розробив: Бондар Роман</footer>
        </div>
    );
}

export default GoogleMapComponent;
