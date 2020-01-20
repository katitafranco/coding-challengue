import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/Header.scss';

function Header({ title }) {
  return (
    <header className="header">
      <div className="title">{title}</div>
      <div className="title__border"></div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
