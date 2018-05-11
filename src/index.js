import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

const jsx = (
  <div className="container">
      <App />
  </div>
);

ReactDOM.render(jsx, document.getElementById('container'));