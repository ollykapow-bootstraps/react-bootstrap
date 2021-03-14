import React from 'react';
import { render } from 'react-dom';

import App from './App';

render(
  <App />,
  document.getElementById('app')
);

console.log(`Running in ${process.env.NODE_ENV} mode.`);
module.hot.accept();
