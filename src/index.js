import './styles/sass/base.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import Header from './react/widgets/Header/Header';
import Footer from './react/widgets/Footer/Footer';

import footerData from './react/widgets/Footer/mock/data.json';
import data from './react/widgets/Header/mock/data.json';

const element = React.createElement(Header, {data}, null);

ReactDOM.render(
  <div className="container px-0">
    {element}
    <Footer data={footerData} />
  </div>,
  document.getElementById('root')
);
