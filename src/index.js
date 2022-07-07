import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//COMPONENT IMPORTS
import TitleBar from './components/TitleBar';
import Table from './components/Table';

//BOOTSTRAP IMPORTS
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TitleBar />
    <Table />
  </React.StrictMode>
);
