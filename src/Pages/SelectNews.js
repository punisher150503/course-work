import React from 'react';
import NewsPage from '../Components/NewsPage';
import { useParams } from 'react-router-dom';

const SelectNews = ({ news }) => {
    const { id } = useParams();

    return (
        <div>
            <NewsPage newsItemId={id} news={news} />
        </div>
    );
}

export default SelectNews;
