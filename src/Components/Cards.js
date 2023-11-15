import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';


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
            news: [],
        };
    }

    componentDidMount() {
        this.fetchNews();
    }

    async fetchNews() {
        try {
            const response = await fetch('http://localhost:3001/news');
            if (!response.ok) {
                throw new Error('Failed to fetch news');
            }
            const news = await response.json();
            this.setState({ news });
        } catch (error) {
            console.error('Error fetching news:', error);
        }
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

    handleAddNews = async () => {
        try {
            const response = await fetch('http://localhost:3001/news', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state.newNews),
            });

            if (!response.ok) {
                throw new Error('Failed to add news');
            }

            await this.fetchNews();
        } catch (error) {
            console.error('Error adding news:', error);
        }

        this.handleClose();
    };

    render() {
        return (
            <div>
                <Form inline className='form_search'>
                    <Button variant='dark' onClick={this.handleShow}>
                        Додати
                    </Button>
                    <FormControl type='text' placeholder='Search' className='text-search' />
                    <Button variant='dark'>Search</Button>
                </Form>
                <div>
                    {this.state.news.map((newsItem) => (
                        <Card key={newsItem.id} className='main_cards'>
                            <Card.Body>
                                <Card.Title>{newsItem.title}</Card.Title>
                                <Card.Text>{newsItem.text}...</Card.Text>
                                <Link to={`/select_news/${newsItem.id}`}>
                                    <Button variant='secondary'>
                                        Деталі
                                    </Button>
                                </Link>
                            </Card.Body>
                            <Card.Footer className='text-muted'>{newsItem.source}</Card.Footer>
                        </Card>
                    ))}
                </div>
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
                        <Button variant='dark' onClick={this.handleAddNews}>
                            Додати новину
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Cards;
