import './styles/sass/base.scss';

import React from 'react';
import ReactDOM from 'react-dom';
window.kiran = window.kiran ? window.kiran : {};
window.kiran.renderComponents = (componentName, data, elementId) => {
  const componentRef = window.kiran.components[componentName];
  const element = React.createElement(componentRef, {data: data}, null);
  ReactDOM.render(
    element,
    document.getElementById(elementId)
  );
};
