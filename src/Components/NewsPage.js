import React, { Component } from 'react';
import { Container, Image, Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './style/index.scss';

class NewsPage extends Component {
    state = {
        showModal: false,
        editingNews: {
            title: '',
            imageUrl: '',
            text: '',
            source: '',
        },
    };

    handleEdit = () => {
        const selectedNews = this.props.news.find(item => item.id === parseInt(this.props.newsItemId));

        if (selectedNews) {
            this.setState({
                showModal: true,
                editingNews: {
                    title: selectedNews.title,
                    imageUrl: selectedNews.imageUrl,
                    text: selectedNews.text,
                    source: selectedNews.source,
                },
            });
        }
    };

    handleClose = () => {
        this.setState({ showModal: false });
    };

    handleSaveChanges = async () => {
        const { editingNews } = this.state;
        const { newsItemId } = this.props;

        try {
            const response = await fetch(`http://localhost:3001/news/${newsItemId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editingNews),
            });

            if (!response.ok) {
                throw new Error('Не вдалося оновити дані на сервері');
            }

            window.location.reload();

        } catch (error) {
            console.error('Помилка при спробі оновлення даних на сервері:', error);
        }
    };



    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            editingNews: {
                ...prevState.editingNews,
                [name]: value,
            },
        }));
    };

    handleDelete = async () => {
        const { newsItemId } = this.props;

        try {
            const response = await fetch(`http://localhost:3001/news/${newsItemId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Не вдалося видалити новину на сервері');
            }

            this.props.navigate('/news');

        } catch (error) {
            console.error('Помилка при видаленні новини на сервері:', error);
        }
    };

    render() {
        const { newsItemId, news } = this.props;

        if (!newsItemId || !news || news.length === 0) {
            return <div>Немає даних для відображення</div>;
        }

        const selectedNews = news.find(item => item.id === parseInt(newsItemId));

        if (!selectedNews) {
            return <div>Немає даних для відображення</div>;
        }

        const { title, imageUrl, text, source } = selectedNews;

        const paragraphs = text.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
        ));

        return (
            <div>
                <Container className='news_container'>
                    <h1 className='main_text'>{title}</h1>
                    <Col className='news_col'>
                        <Image src={imageUrl} rounded className='news_img' />
                        <div className='news_text'>{paragraphs}</div>
                        <div className='news_source'>
                            <b>Джерело: {source}</b>
                            <div>
                                <Button variant='dark' onClick={this.handleEdit}>
                                    Змінити
                                </Button>{' '}
                                <Button href="/news" variant='secondary' onClick={this.handleDelete}>
                                    Видалити
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Container>

                <Modal show={this.state.showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Змінити Статтю</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId='formTitle'>
                                <Form.Label>Заголовок</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Введіть заголовок'
                                    name='title'
                                    value={this.state.editingNews.title}
                                    onChange={this.handleInputChange}
                                />
                            </Form.Group>

                            <Form.Group controlId='formImageUrl'>
                                <Form.Label>Зображення</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Введіть посилання на зображення'
                                    name='imageUrl'
                                    value={this.state.editingNews.imageUrl}
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
                                    value={this.state.editingNews.text}
                                    onChange={this.handleInputChange}
                                />
                            </Form.Group>

                            <Form.Group controlId='formSource'>
                                <Form.Label>Джерело сторінки</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Введіть посилання на джерело сторінки'
                                    name='source'
                                    value={this.state.editingNews.source}
                                    onChange={this.handleInputChange}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='dark' onClick={this.handleSaveChanges}>
                            Зберегти зміни
                        </Button>
                    </Modal.Footer>
                </Modal>
                <footer className='footer'>© 2023 rusІПСО. Розробив: Бондар Роман</footer>
            </div>
        );
    }
}

export default NewsPage;
