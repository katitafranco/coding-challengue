import React from 'react';
import '../assets/styles/components/Layout.scss';

function Layout({ children }) {
  return <div className="layout">{children}</div>;
}

export default Layout;
