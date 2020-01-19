import React from "react";


function NewsItem(props) {
    const { number, title } = props;
    return (
        <div className="news__item">
            <div className="number__item">
                {number}
            </div>
            <div className="title__item">
                {title}
            </div>
        </div>
    );

}

export default NewsItem;