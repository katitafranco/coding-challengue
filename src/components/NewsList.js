import React from 'react';
import '../assets/styles/components/NewsList.scss'


function NewsList(props) {
    return (
        <div className="news__list">
            <div className="news__list__container">
            {props.children}
            </div>
        </div>
    );
}

export default NewsList;
