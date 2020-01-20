import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/Message.scss';

function Message({ text }) {
return (<div className="Message">{text}</div>);
}

Message.propTypes = {
  text: PropTypes.string.isRequired
};

export default Message;
