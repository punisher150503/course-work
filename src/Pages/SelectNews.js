import React, { useState, useEffect } from 'react';
import NewsPage from '../Components/NewsPage';
import { useParams } from 'react-router-dom';

const SelectNews = () => {
  const { id } = useParams();
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://gwxxk7z3-3001.euw.devtunnels.ms/news');
        if (!response.ok) {
          throw new Error('Не вдалося отримати дані новин');
        }
        const newsData = await response.json();
        setNews(newsData);
      } catch (error) {
        console.error('Помилка завантаження новин:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <NewsPage newsItemId={id} news={news} />
    </div>
  );
};

export default SelectNews;
