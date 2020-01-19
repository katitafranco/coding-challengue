import React from 'react'
import '../assets/styles/components/Header.scss'

function Header(props) {

    return (
        <header className="header">
            <div>
                <div className="title">{props.title}</div>
                <div className="title__border"></div>
            </div>
        </header>
    )
}
export default Header;