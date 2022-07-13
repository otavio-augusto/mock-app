//REACT IMPORTS
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//BOOTSTRAP IMPORTS
import 'bootstrap/dist/css/bootstrap.min.css';

//COMPONENT IMPORTS
import Page from './components/Page'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);
