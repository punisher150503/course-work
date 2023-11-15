import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style/index.scss'
import { Container, Form, FormControl } from 'react-bootstrap';


class Cards extends Component {
    render() {
        return (
            <div>
                <Form inline className='form_search'>
                    <FormControl
                        type='text'
                        placeholder='Search'
                        className='text-search'>
                    </FormControl>
                    <Button variant='dark'>Search</Button>
                </Form>
                <Container>
                    <Card className="main_cards">
                        <Card.Body>
                            <Card.Title>Як росія готує інформаційну атаку на керівництво МО України</Card.Title>
                            <Card.Text>
                                Характер інформаційної війни, розгорнутої кремлем з початку вторгнення, свідчить про активізацію зусиль росії, спрямованих на дискредитацію України...
                            </Card.Text>
                            <Button variant="secondary" href="/select_news">Деталі</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">21:32 Субота 28 Жовтня, 2023
                        </Card.Footer>
                    </Card>
                    <Card className="main_cards">
                        <Card.Body>
                            <Card.Title>«Фортеця Львів» — чергова російська ІПСО</Card.Title>
                            <Card.Text>
                                Останнім часом соціальну мережу Tik-Tok заполонили відео з хештегом «Фортеця Львів», під яким користувачі публікують іронічний кавер на пісню гурту «Антитіла»...
                            </Card.Text>
                            <Button variant="secondary">Деталі</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">13:24 Субота 19 Серпня, 2023</Card.Footer>
                    </Card>
                </Container>
            </div>
        );
    }
}

export default Cards;