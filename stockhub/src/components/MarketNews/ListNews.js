import React, { useState, useContext } from 'react';
import { NewsContext } from './NewsContext';
import NewsBlock from './NewsBlock';

const ListNews = () => {
  const [news] = useContext(NewsContext);
  return (
    <div style={listNewsStyle}>
      {news.map((newsBlock) => (
        <div>
          <NewsBlock
            id={newsBlock.id}
            image={newsBlock.image}
            headline={newsBlock.headline}
            summary={newsBlock.summary}
            url={newsBlock.url}
          />
        </div>
      ))}
    </div>
  );
};

const listNewsStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'left',
  flexWrap: 'wrap',
  gap: '20px',
};

export default ListNews;