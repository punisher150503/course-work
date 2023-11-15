import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style/index.scss'
import { Container, Form, FormControl, Modal } from 'react-bootstrap';


class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            newNews: {
                title: '',
                imageUrl: '',
                text: '',
                source: '',
            },
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState((prevState) => ({
            newNews: {
                ...prevState.newNews,
                [name]: value,
            },
        }));
    };

    handleShow = () => {
        this.setState({ showModal: true });
    };

    handleClose = () => {
        this.setState({ showModal: false });
    };

    handleAddNews = () => {
        // Додати код для додавання новини, наприклад, ви можете викликати
        // вашу функцію для збереження новини тут
        console.log('Added news:', this.state.newNews);

        // Закрити модальне вікно після додавання новини
        this.handleClose();
    };



    render() {
        return (
            <div>
                <Form inline className='form_search'>
                    <Button variant='dark' onClick={this.handleShow}>
                        Додати
                    </Button>
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
                    <Modal show={this.state.showModal} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Додати новину</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group controlId='formTitle'>
                                    <Form.Label>Заголовок</Form.Label>
                                    <Form.Control
                                        type='text'
                                        placeholder='Введіть заголовок'
                                        name='title'
                                        onChange={this.handleInputChange}
                                    />
                                </Form.Group>
                                <Form.Group controlId='formImageUrl'>
                                    <Form.Label>Зображення</Form.Label>
                                    <Form.Control
                                        type='text'
                                        placeholder='Введіть посилання на зображення'
                                        name='imageUrl'
                                        onChange={this.handleInputChange}
                                    />
                                </Form.Group>
                                <Form.Group controlId='formText'>
                                    <Form.Label>Стаття</Form.Label>
                                    <Form.Control
                                        as='textarea'
                                        rows={3}
                                        placeholder='Введіть текст статті'
                                        name='text'
                                        onChange={this.handleInputChange}
                                    />
                                </Form.Group>
                                <Form.Group controlId='formSource'>
                                    <Form.Label>Джерело сторінки</Form.Label>
                                    <Form.Control
                                        type='text'
                                        placeholder='Введіть посилання на джерело сторінки'
                                        name='source'
                                        onChange={this.handleInputChange}
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant='secondary' onClick={this.handleClose}>
                                Закрити
                            </Button>
                            <Button variant='dark' onClick={this.handleAddNews}>
                                Додати новину
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Container>
            </div>
        );
    }
}

export default Cards;