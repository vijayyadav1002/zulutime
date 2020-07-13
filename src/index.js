import 'fontsource-roboto';
import React from 'react';
import { render } from 'react-dom';
import App from './app';

const renderAtRoot = () => render(
    <App />,
  document.getElementById('app')
);

renderAtRoot();

export { renderAtRoot };
