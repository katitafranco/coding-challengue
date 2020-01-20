import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/NewsItem.scss';

function NewsItem({ number, title, path } ) {
  
  return (
    <div className="news__item">
      <div className="number__item">{number}</div>
      <div className="title__item">
        <a href={`https://${path}`} rel="noopener noreferrer" target="_blank">
          {title}
        </a>
      </div>
      <div></div>
    </div>
  );
}

NewsItem.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};

export default NewsItem;
