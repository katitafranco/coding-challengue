import React from 'react';


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
