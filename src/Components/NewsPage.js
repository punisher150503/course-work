import React, { Component } from 'react';
import { Container, Image, Col } from 'react-bootstrap';

class NewsPage extends Component {
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

    return (
      <div>
        <Container className='news_container'>
          <h1 className='main_text'>{title}</h1>
          <Col className='news_col'>
            <Image src={imageUrl} rounded className='news_img' />
            <div className='news_text'>{text}</div>
            <div className='news_source'>{source}</div>
          </Col>
        </Container>
      </div>
    );
  }
}

export default NewsPage;
