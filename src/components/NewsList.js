import React from 'react';
import '../assets/styles/components/NewsList.scss';

function NewsList({ children }) {
  return (
    <div className="news__list">
      <div className="news__list__container">{children}</div>
    </div>
  );
}

export default NewsList;
