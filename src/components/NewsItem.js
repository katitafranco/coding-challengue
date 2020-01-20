import React from "react";
import '../assets/styles/components/NewsItem.scss'


function NewsItem(props) {
    const { number, title, path } = props;
    return (
        <div className="news__item">
            <div className="number__item">
                {number}
            </div>
            <div className="title__item">                
                <a href={`http://${path}`}  target="_blank">{title}</a> 
            </div>
            <div>
            </div>
        </div>
    );

}

export default NewsItem;